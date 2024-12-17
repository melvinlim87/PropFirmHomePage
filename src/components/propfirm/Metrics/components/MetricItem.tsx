import React from 'react';
import { Metric } from '../types';
import { getColorClasses } from '../utils/colors';

export default function MetricItem({ icon: Icon, value, label, gradient, percentage }: Metric) {
  const { text, ring } = getColorClasses(gradient);
  const gradientId = `gradient-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        {/* Progress Circle */}
        <svg className="absolute inset-0 w-12 h-12 -rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className={`${text} stop-color`} />
              <stop offset="100%" className={`${ring} stop-color`} />
            </linearGradient>
          </defs>
          
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-10"
          />
          
          {/* Progress circle */}
          {percentage !== undefined && (
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - percentage / 100)}`}
              className="transition-all duration-1000 ease-in-out"
            />
          )}
        </svg>

        {/* Icon */}
        <div className="absolute inset-0 m-2 bg-slate-900 rounded-full flex items-center justify-center">
          <Icon className={`w-5 h-5 ${text}`} />
        </div>
      </div>
      
      {/* Text Content */}
      <div>
        <div className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {value}
        </div>
        <div className="text-sm text-slate-400">
          {label}
        </div>
      </div>
    </div>
  );
}