import React from 'react';
import AnimatedTitle from './ui/AnimatedTitle';
import GridFeatures from './propfirm/GridFeatures';
import CircularMetricsGrid from './metrics/CircularMetricsGrid';

export default function PropFirmSolutions() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-16">
        <AnimatedTitle 
          title="Prop Firm Solutions"
          subtitle="Scale your prop firm with our comprehensive suite of tools and technologies"
          gradient="from-blue-400 via-purple-400 to-pink-400"
        />

        <GridFeatures />
        
        <CircularMetricsGrid />
      </div>
    </section>
  );
}