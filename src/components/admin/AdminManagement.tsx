import React from 'react';
import { motion } from 'framer-motion';
import AdminFeatures from './AdminFeatures';
import AdminMetrics from './AdminMetrics';
import AnimatedTitle from '../ui/AnimatedTitle';

export default function AdminManagement() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedTitle 
          title="Admin Management"
          subtitle="Comprehensive administration tools for efficient platform management"
          gradient="from-emerald-400 via-teal-300 to-cyan-400"
        />

        <AdminFeatures />
        <AdminMetrics />
      </div>
    </section>
  );
}