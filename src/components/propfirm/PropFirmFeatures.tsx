import React from 'react';
import CircularFeatures from './CircularFeatures';

export default function PropFirmFeatures() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <CircularFeatures />
      </div>
    </section>
  );
}