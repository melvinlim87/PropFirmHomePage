import React from 'react';

interface MetricValueProps {
  value: string;
  label: string;
  gradient: string;
}

export default function MetricValue({ value, label, gradient }: MetricValueProps) {
  return (
    <div className="text-center">
      <div className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
        {value}
      </div>
      <div className="text-sm text-slate-400">
        {label}
      </div>
    </div>
  );
}