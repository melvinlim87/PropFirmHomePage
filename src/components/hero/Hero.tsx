import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroStats from './HeroStats';
import TradingDashboard from './TradingDashboard';
import CircuitBoard from '../backgrounds/CircuitBoard';
import GradientBorder from '../ui/GradientBorder';

export default function Hero() {
  const navigate = useNavigate();

  const scrollToPrismTrader = () => {
    const prismTraderSection = document.getElementById('prismtrader-section');
    if (prismTraderSection) {
      prismTraderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 pt-32 pb-8">
      {/* Circuit Board Background */}
      <CircuitBoard />
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"> Trading </span>
              is Here
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6 max-w-xl mx-auto leading-relaxed">
              Experience the next evolution in trading with our cutting-edge platform and comprehensive proprietary trading solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <GradientBorder>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold text-base transition-all hover:brightness-110">
                  Schedule Demo
                </button>
              </GradientBorder>
              <GradientBorder glowIntensity="low">
                <button 
                  onClick={scrollToPrismTrader}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold text-base transition-all hover:bg-slate-700/50"
                >
                  Explore Features
                </button>
              </GradientBorder>
            </div>
          </div>

          <div className="w-full max-w-3xl mx-auto mb-6">
            <HeroStats />
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <TradingDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}