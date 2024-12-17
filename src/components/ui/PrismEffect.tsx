import React from 'react';

interface PrismEffectProps {
  children: React.ReactNode;
}

export default function PrismEffect({ children }: PrismEffectProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}