import React from 'react';
import { motion } from 'framer-motion';
import { Metric } from '../types';
import MetricItem from './MetricItem';

interface MetricsDisplayProps {
  metrics: Metric[];
}

export default function MetricsDisplay({ metrics }: MetricsDisplayProps) {
  return (
    <div className="flex items-center justify-between">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MetricItem {...metric} />
        </motion.div>
      ))}
    </div>
  );
}