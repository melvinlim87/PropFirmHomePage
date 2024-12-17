import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import GradientBorder from '../../ui/GradientBorder';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  index: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  index
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <GradientBorder>
        <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4">
          {/* Diagonal gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity rotate-12`} />
          
          {/* Icon */}
          <div className="relative mb-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${gradient} p-0.5 rotate-12`}>
              <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center -rotate-12">
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-slate-400 text-xs mb-3">{description}</p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-1.5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${gradient}`} />
                <span className="text-xs text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </GradientBorder>
    </motion.div>
  );
}