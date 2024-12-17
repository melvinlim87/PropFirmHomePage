import React from 'react';
import PaymentGatewaySolutions from '../../../components/payments/PaymentGatewaySolutions';

export default function Payments() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/90 to-slate-800/85 backdrop-blur-sm" />
      
      <div className="relative">
        <PaymentGatewaySolutions />
      </div>
    </section>
  );
}