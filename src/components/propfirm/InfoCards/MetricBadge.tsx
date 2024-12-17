import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { Metric } from './types';

interface MetricBadgeProps {
  metric: Metric;
}

export default function MetricBadge({ metric }: MetricBadgeProps) {
  return (
    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-800/50 backdrop-blur-sm">
      <span className="text-sm text-slate-400">{metric.label}</span>
      <div className="flex items-center gap-1.5">
        <span className="font-medium text-white">{metric.value}</span>
        {metric.trend !== undefined && (
          <div className={`flex items-center text-xs ${
            metric.trend > 0 ? 'text-emerald-400' : 
            metric.trend < 0 ? 'text-rose-400' : 'text-slate-400'
          }`}>
            {metric.trend > 0 ? (
              <TrendingUp className="w-3 h-3" />
            ) : metric.trend < 0 ? (
              <TrendingDown className="w-3 h-3" />
            ) : null}
            <span>{Math.abs(metric.trend)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}