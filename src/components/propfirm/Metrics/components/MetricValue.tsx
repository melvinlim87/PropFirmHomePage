import React from 'react';

interface MetricValueProps {
  value: string;
  gradient: string;
}

export default function MetricValue({ value, gradient }: MetricValueProps) {
  return (
    <div className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent leading-none`}>
      {value}
    </div>
  );
}