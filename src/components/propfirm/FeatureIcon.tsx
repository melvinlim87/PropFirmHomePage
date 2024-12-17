import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureIconProps {
  icon: LucideIcon;
  gradient: string;
}

export default function FeatureIcon({ icon: Icon, gradient }: FeatureIconProps) {
  return (
    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${gradient} p-0.5 relative group`}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
        <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}