import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricIconProps {
  icon: LucideIcon;
  gradient: string;
  percentage: number;
}

export default function MetricIcon({ icon: Icon, gradient, percentage }: MetricIconProps) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const gradientId = `gradient-${gradient.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className="relative w-12 h-12">
      <svg className="absolute inset-0 w-12 h-12 -rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className={`${gradient.split(' ')[1]} stop-color`} />
            <stop offset="100%" className={`${gradient.split(' ')[2]} stop-color`} />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-10"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="absolute inset-0 m-2 bg-slate-900 rounded-full flex items-center justify-center">
        <Icon className={`w-5 h-5 ${gradient.split(' ')[1]}`} />
      </div>
    </div>
  );
}