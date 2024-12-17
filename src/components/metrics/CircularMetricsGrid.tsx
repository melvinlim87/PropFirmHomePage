import React from 'react';
import CircularProgress from './components/CircularProgress';
import { circularMetrics } from './data/circular-metrics';
import GradientBorder from '../ui/GradientBorder';

export default function CircularMetricsGrid() {
  return (
    <GradientBorder>
      <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-8 overflow-hidden">
        {/* Subtle gradient background with reduced opacity */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.01] via-purple-500/[0.01] to-cyan-500/[0.01] opacity-30" />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">System Performance</h2>
            <p className="text-slate-400">Real-time monitoring of key performance indicators</p>
          </div>
          
          <div className="flex justify-between items-center">
            {circularMetrics.map((metric) => (
              <CircularProgress
                key={metric.label}
                {...metric}
              />
            ))}
          </div>
        </div>
      </div>
    </GradientBorder>
  );
}