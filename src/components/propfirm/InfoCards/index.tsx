import React from 'react';
import { features } from './data';
import FeatureCard from './FeatureCard';

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
          index={index}
        />
      ))}
    </div>
  );
}