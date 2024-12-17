import React from 'react';
import { motion } from 'framer-motion';
import CircularProgress from './CircularProgress';
import type { Metric } from './types';

interface MetricCardProps extends Metric {
  delay?: number;
}

export default function MetricCard({ 
  icon: Icon, 
  value, 
  label, 
  gradient,
  isPercentage,
  delay = 0 
}: MetricCardProps) {
  const percentage = parseInt(value) || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center w-28"
    >
      {/* Icon with circular progress */}
      <div className="relative inline-block mb-2">
        {isPercentage && (
          <CircularProgress 
            percentage={Math.abs(percentage)} 
            gradient={gradient} 
            delay={delay} 
          />
        )}
        
        <div className="relative w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
          <Icon className={`w-5 h-5 ${
            gradient.includes('blue') ? 'text-blue-400' :
            gradient.includes('purple') ? 'text-purple-400' :
            gradient.includes('emerald') ? 'text-emerald-400' :
            gradient.includes('amber') ? 'text-amber-400' :
            gradient.includes('rose') ? 'text-rose-400' :
            'text-indigo-400'
          }`} />
        </div>
      </div>

      {/* Value */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
        className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}
      >
        {value}
      </motion.div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
        className="text-xs text-slate-400"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}