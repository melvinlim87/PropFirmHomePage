import React from 'react';
import ProductShowcase from '../../../components/products/ProductShowcase';

export default function Products() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-800/80 backdrop-blur-sm" />
      
      <div className="relative">
        <ProductShowcase />
      </div>
    </section>
  );
}