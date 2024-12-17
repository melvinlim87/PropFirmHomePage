import React from 'react';
import { features } from './data';
import FeatureCard from './FeatureCard';
import CenterTitle from './CenterTitle';

export default function CircularFeatures() {
  const topFeatures = features.slice(0, 3);
  const bottomFeatures = features.slice(3, 6);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Top Row */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        {topFeatures.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            index={index}
          />
        ))}
      </div>

      {/* Center Title */}
      <div className="mb-16">
        <CenterTitle />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-6">
        {bottomFeatures.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            index={index + 3}
          />
        ))}
      </div>
    </div>
  );
}