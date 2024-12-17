import React from 'react';
import { motion } from 'framer-motion';
import CircularProgress from './CircularProgress';

interface CircularMetricCardProps {
  title: string;
  value: string;
  percentage: number;
  color: string;
  index: number;
  size?: number;
}

export default function CircularMetricCard({
  title,
  value,
  percentage,
  color,
  index,
  size = 120
}: CircularMetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
      style={{ width: size + 40 }} // Add some padding around the progress circle
    >
      <CircularProgress 
        percentage={percentage} 
        color={color} 
        size={size}
        strokeWidth={6} // Slightly thinner stroke for smaller size
      />
      <div className="text-center mt-2">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-slate-400">{value}</p>
      </div>
    </motion.div>
  );
}