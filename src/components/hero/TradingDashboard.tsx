import React, { useEffect, useRef } from 'react';
import { LineChart, BarChart2, PieChart, Activity } from 'lucide-react';
import { createChart, ColorType } from 'lightweight-charts';
import GradientBorder from '../ui/GradientBorder';

function generateCandlestickData(count: number) {
  const data = [];
  let time = new Date(Date.UTC(2024, 0, 1, 0, 0, 0, 0));
  let basePrice = 200;
  let volatility = 2;

  for (let i = 0; i < count; i++) {
    const open = basePrice + Math.random() * volatility * 2 - volatility;
    const high = open + Math.random() * volatility;
    const low = open - Math.random() * volatility;
    const close = low + Math.random() * (high - low);

    basePrice = close;

    data.push({
      time: time.getTime() / 1000,
      open,
      high,
      low,
      close,
    });

    time = new Date(time.getTime() + 60000);
  }

  return data;
}

function generateVolumeData(count: number) {
  const data = [];
  let time = new Date(Date.UTC(2024, 0, 1, 0, 0, 0, 0));

  for (let i = 0; i < count; i++) {
    data.push({
      time: time.getTime() / 1000,
      value: Math.floor(Math.random() * 100) + 20,
      color: Math.random() > 0.5 ? 'rgba(76, 175, 80, 0.5)' : 'rgba(255, 82, 82, 0.5)',
    });

    time = new Date(time.getTime() + 60000);
  }

  return data;
}

export default function TradingDashboard() {
  const chartRefs = {
    market: useRef<HTMLDivElement>(null),
    volume: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    risk: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const charts: any[] = [];

    // Market Overview Chart
    if (chartRefs.market.current) {
      const chart = createChart(chartRefs.market.current, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: '#9ca3af',
        },
        grid: {
          vertLines: { color: 'rgba(42, 46, 57, 0.2)' },
          horzLines: { color: 'rgba(42, 46, 57, 0.2)' },
        },
        width: chartRefs.market.current.clientWidth,
        height: 150,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#4CAF50',
        downColor: '#FF5252',
        borderVisible: false,
        wickUpColor: '#4CAF50',
        wickDownColor: '#FF5252',
      });

      candlestickSeries.setData(generateCandlestickData(50));
      charts.push(chart);
    }

    // Volume Analysis Chart
    if (chartRefs.volume.current) {
      const chart = createChart(chartRefs.volume.current, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: '#9ca3af',
        },
        grid: {
          vertLines: { color: 'rgba(42, 46, 57, 0.2)' },
          horzLines: { color: 'rgba(42, 46, 57, 0.2)' },
        },
        width: chartRefs.volume.current.clientWidth,
        height: 150,
      });

      const volumeSeries = chart.addHistogramSeries({
        color: '#26a69a',
      });

      volumeSeries.setData(generateVolumeData(50));
      charts.push(chart);
    }

    // Portfolio Mix Chart
    if (chartRefs.portfolio.current) {
      const chart = createChart(chartRefs.portfolio.current, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: '#9ca3af',
        },
        grid: {
          vertLines: { color: 'rgba(42, 46, 57, 0.2)' },
          horzLines: { color: 'rgba(42, 46, 57, 0.2)' },
        },
        width: chartRefs.portfolio.current.clientWidth,
        height: 150,
      });

      const lineSeries = chart.addLineSeries({
        color: '#06b6d4',
        lineWidth: 2,
      });

      const data = generateCandlestickData(50).map(item => ({
        time: item.time,
        value: item.close,
      }));

      lineSeries.setData(data);
      charts.push(chart);
    }

    // Risk Metrics Chart
    if (chartRefs.risk.current) {
      const chart = createChart(chartRefs.risk.current, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: '#9ca3af',
        },
        grid: {
          vertLines: { color: 'rgba(42, 46, 57, 0.2)' },
          horzLines: { color: 'rgba(42, 46, 57, 0.2)' },
        },
        width: chartRefs.risk.current.clientWidth,
        height: 150,
      });

      const areaSeries = chart.addAreaSeries({
        lineColor: '#f43f5e',
        topColor: 'rgba(244, 63, 94, 0.4)',
        bottomColor: 'rgba(244, 63, 94, 0.0)',
      });

      const data = generateCandlestickData(50).map(item => ({
        time: item.time,
        value: Math.abs(item.close - item.open) * 2,
      }));

      areaSeries.setData(data);
      charts.push(chart);
    }

    // Cleanup function
    return () => {
      charts.forEach(chart => chart.remove());
    };
  }, []);

  return (
    <GradientBorder>
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LineChart className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-300">Market Overview</span>
              </div>
              <span className="text-sm text-emerald-400">+2.45%</span>
            </div>
            <div ref={chartRefs.market} className="h-[150px]" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-slate-300">Volume Analysis</span>
              </div>
              <span className="text-sm text-blue-400">24H</span>
            </div>
            <div ref={chartRefs.volume} className="h-[150px]" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PieChart className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-slate-300">Portfolio Mix</span>
              </div>
              <span className="text-sm text-cyan-400">Balanced</span>
            </div>
            <div ref={chartRefs.portfolio} className="h-[150px]" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-rose-400" />
                <span className="text-sm text-slate-300">Risk Metrics</span>
              </div>
              <span className="text-sm text-rose-400">Low</span>
            </div>
            <div ref={chartRefs.risk} className="h-[150px]" />
          </div>
        </div>
      </div>
    </GradientBorder>
  );
}