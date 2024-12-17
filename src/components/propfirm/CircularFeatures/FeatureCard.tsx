import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import GradientBorder from '../../ui/GradientBorder';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  index
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GradientBorder>
        <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300">
          <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${gradient} p-0.5`}>
            <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center">
              <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-white text-center mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all">
            {title}
          </h3>
          
          <p className="text-sm text-slate-400 text-center">
            {description}
          </p>
        </div>
      </GradientBorder>
    </motion.div>
  );
}