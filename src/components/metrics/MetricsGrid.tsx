import React from 'react';
import MetricCard from './MetricCard';
import type { MetricsProps } from './types';

export default function MetricsGrid({ title, subtitle, metrics }: MetricsProps) {
  return (
    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
      {/* Gradient border effect */}
      <div className="absolute -inset-[3px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-500 rounded-xl opacity-50 blur-[2px] transition-all duration-300 group-hover:opacity-75 group-hover:blur-[3px]" />
      
      <div className="relative">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-slate-400">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-x-12 gap-y-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}