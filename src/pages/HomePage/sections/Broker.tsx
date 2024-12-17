import React from 'react';
import BrokerSolutions from '../../../components/BrokerSolutions';

export default function Broker() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-800/80 backdrop-blur-sm" />
      
      <div className="relative">
        <BrokerSolutions />
      </div>
    </section>
  );
}