import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
}

export default function MetricItem({ icon: Icon, value, label, gradient }: MetricItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`shrink-0 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center ring-1 ring-opacity-50 ${
        gradient.includes('blue') ? 'ring-blue-400' :
        gradient.includes('purple') ? 'ring-purple-400' :
        gradient.includes('emerald') ? 'ring-emerald-400' :
        gradient.includes('amber') ? 'ring-amber-400' :
        gradient.includes('rose') ? 'ring-rose-400' :
        'ring-indigo-400'
      }`}>
        <Icon className={`w-5 h-5 ${
          gradient.includes('blue') ? 'text-blue-400' :
          gradient.includes('purple') ? 'text-purple-400' :
          gradient.includes('emerald') ? 'text-emerald-400' :
          gradient.includes('amber') ? 'text-amber-400' :
          gradient.includes('rose') ? 'text-rose-400' :
          'text-indigo-400'
        }`} />
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent leading-none`}>
          {value}
        </span>
        <span className="text-xs text-slate-400 mt-1">{label}</span>
      </div>
    </div>
  );
}