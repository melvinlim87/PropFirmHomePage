import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
  description?: string;
  delay?: number;
}

export default function AchievementCard({ 
  icon: Icon, 
  value, 
  label, 
  gradient, 
  description,
  delay = 0 
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      {/* Enhanced Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />
      
      {/* Content */}
      <div className="relative text-center">
        <div className="mb-4 relative">
          <motion.div 
            className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${gradient} p-0.5`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
          className={`text-4xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-2`}
        >
          {value}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3 }}
          className="text-slate-300 font-medium"
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
}