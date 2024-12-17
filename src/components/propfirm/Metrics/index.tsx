import React from 'react';
import { metrics } from './data';
import MetricsDisplay from './components/MetricsDisplay';
import GradientBorder from '../../ui/GradientBorder';

export default function Metrics() {
  return (
    <GradientBorder>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-white mb-1">Performance Metrics</h3>
          <p className="text-slate-400 text-sm mb-6">
            Delivering exceptional results through innovation and efficiency
          </p>
        </div>
        <MetricsDisplay metrics={metrics} />
      </div>
    </GradientBorder>
  );
}