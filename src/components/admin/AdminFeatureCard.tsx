import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdminFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay?: number;
}

export default function AdminFeatureCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  delay = 0
}: AdminFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
        <div className="flex items-start gap-6">
          {/* Animated Icon Container */}
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`w-16 h-16 rounded-xl bg-gradient-to-r ${gradient} p-0.5`}
            >
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            {/* Animated Circuit Lines */}
            <div className="absolute -inset-4">
              <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 rounded-xl`}>
                <div className="absolute inset-0 bg-circuit-pattern animate-pulse" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all">
              {title}
            </h3>
            <p className="text-slate-400 mb-4">{description}</p>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                  <span className="text-sm text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}