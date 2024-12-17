import React from 'react';
import GradientBorder from '../ui/GradientBorder';

interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <GradientBorder>
      <div className="bg-slate-900 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">{label}</span>
          <span className="text-blue-400 font-semibold">{value}</span>
        </div>
      </div>
    </GradientBorder>
  );
}