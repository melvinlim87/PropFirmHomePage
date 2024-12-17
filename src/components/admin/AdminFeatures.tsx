import React from 'react';
import { motion } from 'framer-motion';
import AdminFeatureCard from './AdminFeatureCard';
import { adminFeatures } from './adminData';

export default function AdminFeatures() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {adminFeatures.map((feature, index) => (
          <AdminFeatureCard 
            key={feature.title}
            {...feature}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}