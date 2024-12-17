import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';
import FeatureIcon from './FeatureIcon';
import FeatureStats from './FeatureStats';

interface CircularFeatureNodeProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
    stats: string[];
  };
  x: number;
  y: number;
  index: number;
  totalNodes: number;
}

export default function CircularFeatureNode({
  feature,
  x,
  y,
  index,
  totalNodes
}: CircularFeatureNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="absolute w-64"
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
      }}
    >
      <GradientBorder>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
          <FeatureIcon icon={feature.icon} gradient={feature.gradient} />
          
          <h3 className="text-xl font-bold text-white text-center mb-2">
            {feature.title}
          </h3>
          
          <p className="text-sm text-slate-400 text-center mb-4">
            {feature.description}
          </p>
          
          <FeatureStats stats={feature.stats} gradient={feature.gradient} />
        </div>
      </GradientBorder>
    </motion.div>
  );
}