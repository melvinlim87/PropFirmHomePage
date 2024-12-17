import React from 'react';
import { motion } from 'framer-motion';
import { generateCircularPoints, calculateArcPath } from '../../utils/circuitBoard/pathGenerator';

interface CircularConnectingLinesProps {
  totalFeatures: number;
  radius: number;
}

export default function CircularConnectingLines({ totalFeatures, radius }: CircularConnectingLinesProps) {
  const points = generateCircularPoints(radius, totalFeatures);

  return (
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(96, 165, 250, 0.5)" />
          <stop offset="50%" stopColor="rgba(192, 132, 252, 0.5)" />
          <stop offset="100%" stopColor="rgba(244, 114, 182, 0.5)" />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g>
        {points.map((startPoint, index) => {
          const endPoint = points[(index + 1) % totalFeatures];
          const pathData = calculateArcPath(startPoint, endPoint, radius);

          return (
            <motion.path
              key={index}
              d={pathData}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
            />
          );
        })}
      </g>
    </svg>
  );
}