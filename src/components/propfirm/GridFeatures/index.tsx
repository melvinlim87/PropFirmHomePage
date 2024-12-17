import React from 'react';
import { features } from './data';
import FeatureCard from './FeatureCard';
import CenterIcon from './CenterIcon';
import ConnectingLines from './ConnectingLines';

export default function GridFeatures() {
  const topFeatures = features.slice(0, 3);
  const bottomFeatures = features.slice(3);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Connecting Lines */}
      <ConnectingLines />

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

      {/* Center Icon */}
      <div className="relative -my-8">
        <CenterIcon />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-6 mt-16">
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