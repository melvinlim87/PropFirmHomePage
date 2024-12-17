import React from 'react';
import Features from './Features';
import CircularFeatures from './CircularFeatures';
import MetricsRow from './Metrics/components/MetricsRow';
import { metrics } from './Metrics/data';
import AnimatedTitle from '../ui/AnimatedTitle';

// Duplicate metrics with different values for the second row
const secondRowMetrics = metrics.map(metric => ({
  ...metric,
  value: metric.value.startsWith('+') ? 
    `+${Math.floor(Math.random() * 50 + 30)}%` :
    metric.value.startsWith('-') ?
    `-${Math.floor(Math.random() * 50 + 30)}%` :
    metric.value.includes('%') ?
    `${Math.floor(Math.random() * 30 + 70)}%` :
    metric.value,
  percentage: Math.floor(Math.random() * 30 + 70)
}));

export default function PropFirmSolutions() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedTitle 
          title="Prop Firm Solutions"
          subtitle="Scale your prop firm with our comprehensive suite of tools and technologies"
          gradient="from-blue-400 via-purple-400 to-pink-400"
        />

        {/* Grid Layout */}
        <Features />

        {/* Circular Layout */}
        <div className="mt-32">
          <CircularFeatures />
        </div>

        {/* Performance Metrics - First Row */}
        <div className="mt-32">
          <MetricsRow 
            title="Performance Metrics"
            subtitle="Delivering exceptional results through innovation and efficiency"
            metrics={metrics}
          />
        </div>

        {/* Performance Metrics - Second Row */}
        <div className="mt-8">
          <MetricsRow 
            title="System Metrics"
            subtitle="Monitoring system performance and operational efficiency"
            metrics={secondRowMetrics}
          />
        </div>
      </div>
    </section>
  );
}