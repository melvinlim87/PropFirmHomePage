import React from 'react';
import { motion } from 'framer-motion';

interface FeatureStatsProps {
  stats: string[];
  gradient: string;
}

export default function FeatureStats({ stats, gradient }: FeatureStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
          <span className="text-xs text-slate-300">{stat}</span>
        </motion.div>
      ))}
    </div>
  );
}