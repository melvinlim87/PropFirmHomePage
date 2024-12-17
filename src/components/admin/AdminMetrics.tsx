import React from 'react';
import { motion } from 'framer-motion';
import AdminMetricCard from './AdminMetricCard';
import { adminMetrics } from './adminData';
import GradientBorder from '../ui/GradientBorder';

export default function AdminMetrics() {
  return (
    <div className="mt-16">
      <GradientBorder>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">System Performance</h3>
            <p className="text-slate-400">Real-time monitoring of platform efficiency and operations</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {adminMetrics.map((metric, index) => (
              <AdminMetricCard 
                key={metric.label}
                {...metric}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </GradientBorder>
    </div>
  );
}