import React from 'react';

export default function PrismLogo() {
  return (
    <div className="relative w-8 h-8">
      {/* Outer rotating diamond with gradient border */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-cyan-300 to-purple-500 rounded-lg transform rotate-45">
          <div className="absolute inset-[3.8px] bg-slate-900 rounded-lg" />
        </div>
      </div>
      
      {/* Inner static diamond */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 bg-gradient-to-tr from-blue-400 to-cyan-300 transform rotate-45" />
      </div>

      {/* Gradient glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
    </div>
  );
}