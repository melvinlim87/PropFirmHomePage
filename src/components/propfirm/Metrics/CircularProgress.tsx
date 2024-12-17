import React from 'react';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  percentage: number;
  gradient: string;
  delay?: number;
}

export default function CircularProgress({ percentage, gradient, delay = 0 }: CircularProgressProps) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="absolute -inset-1 w-12 h-12 rotate-[-90deg]">
      {/* Background circle */}
      <circle
        cx="24"
        cy="24"
        r={radius}
        strokeWidth="2"
        stroke={`url(#${gradient})`}
        fill="none"
        className="opacity-20"
      />
      
      {/* Progress circle */}
      <motion.circle
        cx="24"
        cy="24"
        r={radius}
        strokeWidth="2"
        stroke={`url(#${gradient})`}
        fill="none"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, delay }}
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id={gradient} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="from-color" />
          <stop offset="100%" className="to-color" />
        </linearGradient>
      </defs>
    </svg>
  );
}