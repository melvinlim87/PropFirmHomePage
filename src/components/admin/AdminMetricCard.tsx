import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdminMetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
  description: string;
  delay?: number;
}

export default function AdminMetricCard({
  icon: Icon,
  value,
  label,
  gradient,
  description,
  delay = 0
}: AdminMetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Enhanced Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />
      
      {/* Content */}
      <div className="relative text-center p-6">
        <div className="mb-4">
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.4 }}
          className="mt-2 text-sm text-slate-400"
        >
          {description}
        </motion.div>
      </div>
    </motion.div>
  );
}