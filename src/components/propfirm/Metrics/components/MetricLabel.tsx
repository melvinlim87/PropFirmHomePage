import React from 'react';

interface MetricLabelProps {
  label: string;
}

export default function MetricLabel({ label }: MetricLabelProps) {
  return (
    <div className="text-xs text-slate-400 mt-1">
      {label}
    </div>
  );
}