import React from 'react';
import { CandlestickChart, Settings } from 'lucide-react';
import GradientBorder from './ui/GradientBorder';
import CandlestickChartComponent from './charts/CandlestickChart';
import ProprietaryData from './trading/ProprietaryData';
import QuickTrade from './trading/QuickTrade';
import AnimatedPrismLogo from './ui/AnimatedPrismLogo';

export default function WebTraderDemo() {
  return (
    <section id="prismtrader-section" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedPrismLogo />
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
              PrismTrader
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intuitive WebTrader Platform
          </h3>
          <p className="text-slate-400 max-w-none mx-auto text-lg whitespace-nowrap">
            Experience The Responsive & Powerful Next Generation of Trading Technology With Our WebTrader
          </p>
        </div>
        
        <GradientBorder>
          <div className="bg-slate-800 rounded-2xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <CandlestickChart className="w-5 h-5 text-blue-400" />
                      <span className="text-lg font-semibold text-white">XAUUSD</span>
                    </div>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded">+1.24%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                      <Settings className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>
                </div>
                <CandlestickChartComponent />
              </div>

              <div className="lg:col-span-1 space-y-6">
                <ProprietaryData />
                <QuickTrade />
              </div>
            </div>
          </div>
        </GradientBorder>
      </div>
    </section>
  );
}