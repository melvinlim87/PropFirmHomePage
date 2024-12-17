import React from 'react';
import Hero from '../components/hero/Hero';
import ProductShowcase from '../components/products/ProductShowcase';
import WebTraderDemo from '../components/WebTraderDemo';
import PropFirmSolutions from '../components/PropFirmSolutions';
import IntegratedSolutionComparison from '../components/comparison/IntegratedSolutionComparison';
import PriceComparison from '../components/comparison/PriceComparison';
import PaymentGatewaySolutions from '../components/payments/PaymentGatewaySolutions';
import BrokerSolutions from '../components/BrokerSolutions';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <WebTraderDemo />
      <PropFirmSolutions />
      <IntegratedSolutionComparison />
      <PriceComparison />
      <PaymentGatewaySolutions />
      <BrokerSolutions />
    </>
  );
}