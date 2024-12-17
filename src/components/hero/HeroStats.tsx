import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatItem({ icon, label, value }: StatItemProps) {
  return (
    <GradientBorder>
      <div className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg">
        <div className="text-blue-400">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
        </div>
        <div>
          <p className="text-base font-medium text-slate-400">
            {label}
          </p>
          <p className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {value}
          </p>
        </div>
      </div>
    </GradientBorder>
  );
}

export default function HeroStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <StatItem 
        icon={<TrendingUp />}
        label="Daily Volume"
        value="$2.4B+"
      />
      <StatItem 
        icon={<Users />}
        label="Active Traders"
        value="10,000+"
      />
      <StatItem 
        icon={<Globe />}
        label="Global Reach"
        value="150+ Countries"
      />
    </div>
  );
}