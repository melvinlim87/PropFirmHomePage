import React from 'react';
import Hero from './sections/Hero';
import Products from './sections/Products';
import WebTrader from './sections/WebTrader';
import PropFirm from './sections/PropFirm';
import Solutions from './sections/Solutions';
import Pricing from './sections/Pricing';
import Payments from './sections/Payments';
import Broker from './sections/Broker';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
      
      {/* Content */}
      <div className="relative">
        <Hero />
        <Products />
        <WebTrader />
        <PropFirm />
        <Solutions />
        <Pricing />
        <Payments />
        <Broker />
      </div>
    </div>
  );
}