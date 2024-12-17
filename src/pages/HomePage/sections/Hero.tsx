import React from 'react';
import HeroContent from '../components/hero/HeroContent';
import HeroStats from '../components/hero/HeroStats';
import TradingDashboard from '../components/hero/TradingDashboard';
import CircuitBoard from '../../../components/backgrounds/CircuitBoard';

export default function Hero() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/50 backdrop-blur-sm pt-32 pb-8">
      <CircuitBoard />
      
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex flex-col items-center gap-8">
          <HeroContent />
          <HeroStats />
          <TradingDashboard />
        </div>
      </div>
    </section>
  );
}