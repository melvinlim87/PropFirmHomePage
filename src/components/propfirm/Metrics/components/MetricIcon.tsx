import React from 'react';
import { LucideIcon } from 'lucide-react';
import { getColorClasses } from '../utils';
import CircularProgress from './CircularProgress';

interface MetricIconProps {
  icon: LucideIcon;
  gradient: string;
  percentage?: number;
}

export default function MetricIcon({ icon: Icon, gradient, percentage }: MetricIconProps) {
  const { text } = getColorClasses(gradient);
  const gradientId = gradient.replace(/from-|to-|\s/g, '');
  
  return (
    <div className="relative w-10 h-10">
      {percentage !== undefined && (
        <CircularProgress
          percentage={Math.abs(percentage)}
          gradient={gradientId}
          size={40}
          strokeWidth={2}
        />
      )}
      <div className="absolute inset-0 bg-slate-900 rounded-full flex items-center justify-center">
        <Icon className={`w-5 h-5 ${text}`} />
      </div>
    </div>
  );
}