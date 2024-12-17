import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientBorder from '../ui/GradientBorder';
import AnimatedFeatureIcon from './AnimatedFeatureIcon';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  stats: string[];
  delay?: number;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  gradient, 
  stats, 
  delay = 0 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <GradientBorder>
        <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 h-full hover:bg-slate-800/70 transition-all duration-300">
          <div className="flex items-start gap-6">
            {/* Enhanced Animated Icon */}
            <AnimatedFeatureIcon icon={icon} gradient={gradient} />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all">
                {title}
              </h3>
              <p className="text-slate-400 mb-4">{description}</p>
              
              {/* Feature Stats with Enhanced Animation */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-2 group/stat"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} group-hover/stat:scale-150 transition-transform duration-300`} />
                    <span className="text-sm text-slate-300 group-hover/stat:text-white transition-colors">
                      {stat}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GradientBorder>
    </motion.div>
  );
}