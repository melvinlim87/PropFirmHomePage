import React from 'react';
import { motion } from 'framer-motion';
import { Metric } from './types';
import MetricItem from './components/MetricItem';
import GradientBorder from '../../ui/GradientBorder';

interface MetricsRowProps {
  title: string;
  subtitle: string;
  metrics: Metric[];
}

export default function MetricsRow({ title, subtitle, metrics }: MetricsRowProps) {
  return (
    <GradientBorder>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-slate-400 text-sm">{subtitle}</p>
        </div>
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
      </div>
    </GradientBorder>
  );
}