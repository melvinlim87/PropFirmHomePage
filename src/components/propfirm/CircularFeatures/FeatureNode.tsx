import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import GradientBorder from '../../ui/GradientBorder';

interface FeatureNodeProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
  };
  x: number;
  y: number;
  angle: number;
  index: number;
}

export default function FeatureNode({ feature, x, y, angle, index }: FeatureNodeProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="absolute w-40 transform"
      style={{ 
        left: x,
        top: y,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`
      }}
    >
      <GradientBorder>
        <motion.div 
          className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          style={{ transform: `rotate(${-angle}deg)` }} // Counter-rotate content
        >
          {/* Icon */}
          <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5`}>
            <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-base font-bold text-white text-center mb-1">
            {feature.title}
          </h3>
          <p className="text-xs text-slate-400 text-center">
            {feature.description}
          </p>
        </motion.div>
      </GradientBorder>
    </motion.div>
  );
}