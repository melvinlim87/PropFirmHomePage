import React from 'react';
import { LineChart, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Next-Gen Trading
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Infrastructure</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl">
              Empower your brokerage with our cutting-edge WebTrader platform and comprehensive prop firm solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
                Request Demo
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-slate-600 hover:border-blue-400 text-white rounded-lg font-semibold transition-all">
                View Solutions
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white font-semibold">Trading Volume</h3>
                    <p className="text-slate-400 text-sm">Last 24 hours</p>
                  </div>
                  <LineChart className="text-blue-400 w-6 h-6" />
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse"
                        style={{ 
                          width: `${Math.random() * 60 + 40}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}