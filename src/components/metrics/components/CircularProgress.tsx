import React from 'react';
import { motion } from 'framer-motion';
import { createColoredShadow } from '../utils/colors';
import type { CircularProgressProps } from '../types/circular-metrics';

export default function CircularProgress({
  percentage,
  color,
  label,
  sublabel,
  size = 80
}: CircularProgressProps) {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative" 
        style={{ 
          width: size, 
          height: size,
          filter: `drop-shadow(${createColoredShadow(color, 0.15)})` // Subtle colored shadow
        }}
      >
        <svg className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-slate-800/30"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Percentage text */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            textShadow: `0 2px 4px rgba(0,0,0,0.1)`,
            filter: `drop-shadow(0 0 2px ${color}20)`
          }}
        >
          <span className="text-lg font-bold" style={{ color }}>
            {percentage}%
          </span>
        </div>
      </div>

      {/* Labels */}
      <div className="mt-3 text-center">
        <h3 className="text-sm font-semibold text-white">{label}</h3>
        <p className="text-xs text-slate-400">{sublabel}</p>
      </div>
    </div>
  );
}