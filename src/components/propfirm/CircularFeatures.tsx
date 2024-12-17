import React from 'react';
import CenterTitle from './CenterTitle';
import CircularFeatureNode from './CircularFeatureNode';
import CircularConnectingLines from './CircularConnectingLines';
import { features } from './features';

export default function CircularFeatures() {
  const radius = 300;

  return (
    <div className="relative min-h-[800px] flex items-center justify-center">
      <CenterTitle />

      {/* Circular Features Layout */}
      <div className="relative w-[800px] h-[800px]">
        {features.map((feature, index) => {
          const angle = (index * (360 / features.length)) + 45;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <CircularFeatureNode
              key={feature.title}
              feature={feature}
              x={x}
              y={y}
              index={index}
              totalNodes={features.length}
            />
          );
        })}

        <CircularConnectingLines 
          totalFeatures={features.length} 
          radius={radius} 
        />
      </div>
    </div>
  );
}