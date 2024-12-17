import React from 'react';
import GradientBorder from '../ui/GradientBorder';

export default function CTAButtons() {
  return (
    <div className="flex items-center gap-4">
      <GradientBorder glowIntensity="low">
        <button className="px-5 py-2 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-medium text-sm hover:bg-slate-700/50 transition-colors">
          Schedule A Call
        </button>
      </GradientBorder>
      <GradientBorder>
        <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm transition-colors">
          Client Portal
        </button>
      </GradientBorder>
    </div>
  );
}