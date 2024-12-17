import React from 'react';
import { motion } from 'framer-motion';
import MetricIcon from './MetricIcon';
import MetricValue from './MetricValue';
import type { MetricItem } from './types';

interface MetricCardProps extends MetricItem {
  index: number;
}

export default function MetricCard({ icon, value, label, gradient, percentage, index }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col items-center gap-3"
    >
      {/* Gradient glow effect */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity`} />
      
      <div className="relative">
        <MetricIcon 
          icon={icon} 
          gradient={gradient} 
          percentage={percentage} 
        />
        <MetricValue 
          value={value} 
          label={label} 
          gradient={gradient} 
        />
      </div>
    </motion.div>
  );
}