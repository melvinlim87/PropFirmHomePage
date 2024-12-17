import React from 'react';
import ProductCard from './ProductCard';
import { MonitorPlay, Users, Building2, Wrench, CreditCard, Brain } from 'lucide-react';
import AnimatedTitle from '../ui/AnimatedTitle';

const products = [
  {
    id: 'prop-firm',
    title: 'Prop Firm Solutions',
    subtitle: 'Comprehensive CRM System',
    description: 'Complete prop firm management system with trader evaluation, risk management, and performance tracking.',
    icon: Users,
    features: ['Trader Evaluation', 'Risk Management', 'Performance Analytics', 'Capital Allocation'],
    gradient: 'from-purple-500 via-pink-400 to-red-500',
    demoUrl: '/prop-firm'
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway',
    subtitle: 'Integrated Payment Solutions',
    description: 'Comprehensive payment processing with support for multiple providers including Stripe, PayPal, 5Pay, and ZPay.',
    icon: CreditCard,
    features: ['Multiple Providers', 'Instant Processing', 'API Integration', 'Fraud Protection'],
    gradient: 'from-green-500 via-emerald-400 to-teal-500',
    demoUrl: '#payment-solutions'
  },
  {
    id: 'broker-solutions',
    title: 'Broker Solutions',
    subtitle: 'Enterprise CRM Platform',
    description: 'Full-suite brokerage management system with client onboarding, compliance, and reporting tools.',
    icon: Building2,
    features: ['Client Management', 'Compliance Tools', 'Payment Processing', 'Reporting Dashboard'],
    gradient: 'from-emerald-500 via-teal-400 to-cyan-500',
    demoUrl: '#broker-solutions'
  },
  {
    id: 'webtrader',
    title: 'WebTrader Platform',
    subtitle: 'Next-Gen Trading Interface',
    description: 'Advanced trading platform with real-time analytics, customizable interfaces, and institutional-grade execution.',
    icon: MonitorPlay,
    features: ['Multi-Asset Trading', 'Advanced Charting', 'Real-time Analytics', 'Custom Indicators'],
    gradient: 'from-blue-500 via-cyan-400 to-indigo-500',
    demoUrl: '#prismtrader-section'
  },
  {
    id: 'consulting',
    title: 'Consulting Services',
    subtitle: 'Expert Financial Guidance',
    description: 'Professional consulting services in risk management, marketing strategies, and technical implementation.',
    icon: Brain,
    features: ['Risk Assessment', 'Marketing Strategy', 'Technical Planning', 'Compliance Guidance'],
    gradient: 'from-violet-500 via-purple-400 to-fuchsia-500',
    demoUrl: '#solutions-section'
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    subtitle: 'Tailored Development',
    description: 'Bespoke fintech solutions designed and developed to meet your specific business requirements.',
    icon: Wrench,
    features: ['Custom Development', 'System Integration', 'Technical Consulting', 'Ongoing Support'],
    gradient: 'from-amber-500 via-orange-400 to-red-500',
    demoUrl: '#solutions-section'
  }
];

export default function ProductShowcase() {
  return (
    <section id="solutions-section" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedTitle 
          title="Our Solutions"
          subtitle="Comprehensive suite of fintech solutions designed for modern financial institutions"
          gradient="from-blue-400 via-cyan-300 to-purple-400"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}