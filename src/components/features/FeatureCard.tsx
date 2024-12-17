import React from 'react';
import { LucideIcon } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <GradientBorder>
      <div className="group bg-slate-900 rounded-xl p-6 h-full">
        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </GradientBorder>
  );
}