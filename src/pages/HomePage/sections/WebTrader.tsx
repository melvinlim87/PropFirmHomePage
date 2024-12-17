import React from 'react';
import WebTraderDemo from '../../../components/WebTraderDemo';

export default function WebTrader() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-slate-800/90 backdrop-blur-sm" />
      
      <div className="relative">
        <WebTraderDemo />
      </div>
    </section>
  );
}