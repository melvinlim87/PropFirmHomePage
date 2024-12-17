import React from 'react';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  percentage: number;
  gradient: string;
  gradientId: string;
}

export default function CircularProgress({ percentage, gradient, gradientId }: CircularProgressProps) {
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="absolute inset-0 w-12 h-12 -rotate-90">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className={`${
            gradient.includes('blue') ? 'text-blue-400' :
            gradient.includes('purple') ? 'text-purple-400' :
            gradient.includes('emerald') ? 'text-emerald-400' :
            gradient.includes('amber') ? 'text-amber-400' :
            gradient.includes('rose') ? 'text-rose-400' :
            'text-indigo-400'
          } stop-color`} />
          <stop offset="100%" className={`${
            gradient.includes('cyan') ? 'text-cyan-400' :
            gradient.includes('pink') ? 'text-pink-400' :
            gradient.includes('teal') ? 'text-teal-400' :
            gradient.includes('orange') ? 'text-orange-400' :
            gradient.includes('red') ? 'text-red-400' :
            'text-violet-400'
          } stop-color`} />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="opacity-10"
      />
      
      {/* Progress circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}