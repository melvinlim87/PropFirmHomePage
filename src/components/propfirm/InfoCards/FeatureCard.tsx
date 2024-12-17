import React from 'react';
import { motion } from 'framer-motion';
import MetricBadge from './MetricBadge';
import type { Feature } from './types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5`}>
            <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{feature.title}</h3>
            <p className="text-sm text-slate-400">{feature.description}</p>
          </div>
        </div>

        <div className="space-y-2">
          {feature.metrics.map((metric, idx) => (
            <MetricBadge key={idx} metric={metric} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}