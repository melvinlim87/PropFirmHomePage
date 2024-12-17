import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, IChartApi, ISeriesApi, CandlestickData } from 'lightweight-charts';
import { generateXAUUSDData } from '../../utils/chartData';

interface TradeExecution {
  price: number;
  time: number;
  type: 'buy' | 'sell';
}

export default function CandlestickChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<IChartApi | null>(null);
  const [candleSeries, setCandleSeries] = useState<ISeriesApi<"Candlestick"> | null>(null);
  const [markerSeries, setMarkerSeries] = useState<ISeriesApi<"Line"> | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chartContainer = chartContainerRef.current;
    const newChart = createChart(chartContainer, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#9ca3af',
        fontSize: 12,
      },
      grid: {
        vertLines: { color: 'rgba(42, 46, 57, 0.2)' },
        horzLines: { color: 'rgba(42, 46, 57, 0.2)' },
      },
      width: chartContainer.clientWidth,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderColor: 'rgba(42, 46, 57, 0.2)',
      },
      rightPriceScale: {
        borderColor: 'rgba(42, 46, 57, 0.2)',
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
        autoScale: true,
      },
      crosshair: {
        vertLine: {
          color: 'rgba(255, 255, 255, 0.1)',
          width: 1,
          style: 3,
        },
        horzLine: {
          color: 'rgba(255, 255, 255, 0.1)',
          width: 1,
          style: 3,
        },
      },
    });

    const newCandleSeries = newChart.addCandlestickSeries({
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    });

    const newMarkerSeries = newChart.addLineSeries({
      lastValueVisible: false,
      priceLineVisible: false,
      crosshairMarkerVisible: false,
    });

    setChart(newChart);
    setCandleSeries(newCandleSeries);
    setMarkerSeries(newMarkerSeries);

    // Initial data
    const initialData = generateXAUUSDData(100); // More initial data points
    newCandleSeries.setData(initialData);

    // Simulate real-time updates
    let lastCandle = initialData[initialData.length - 1];
    const updateInterval = setInterval(() => {
      const newData = generateXAUUSDData(1)[0];
      newData.time = lastCandle.time + 60;
      lastCandle = newData;
      newCandleSeries.update(newData);

      // Random trade execution with higher frequency
      if (Math.random() > 0.6) {
        const isBuy = Math.random() > 0.5;
        const execution: TradeExecution = {
          price: newData.close,
          time: newData.time,
          type: isBuy ? 'buy' : 'sell'
        };

        newMarkerSeries.setMarkers([{
          time: execution.time,
          position: isBuy ? 'belowBar' : 'aboveBar',
          color: isBuy ? '#22c55e' : '#ef4444',
          shape: isBuy ? 'arrowUp' : 'arrowDown',
          text: isBuy ? 'BUY' : 'SELL'
        }]);
      }
    }, 1000);

    const handleResize = () => {
      newChart.applyOptions({ width: chartContainer.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(updateInterval);
      window.removeEventListener('resize', handleResize);
      newChart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} className="w-full" />;
}