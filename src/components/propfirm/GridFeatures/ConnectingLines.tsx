import React from 'react';
import { motion } from 'framer-motion';

export default function ConnectingLines() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.2)" />
            <stop offset="50%" stopColor="rgba(192, 132, 252, 0.2)" />
            <stop offset="100%" stopColor="rgba(244, 114, 182, 0.2)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Diagonal lines from top cards to center */}
        {[1, 2, 3].map((i) => (
          <motion.line
            key={`top-${i}`}
            x1={`${i * 33.33 - 16.67}%`}
            y1="25%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          />
        ))}

        {/* Diagonal lines from center to bottom cards */}
        {[1, 2, 3].map((i) => (
          <motion.line
            key={`bottom-${i}`}
            x1="50%"
            y1="50%"
            x2={`${i * 33.33 - 16.67}%`}
            y2="75%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 + i * 0.2 }}
          />
        ))}

        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <circle
            key={`particle-${i}`}
            r="2"
            fill="white"
            filter="url(#glow)"
            opacity="0.6"
          >
            <motion.animateMotion
              path={i < 3 ? 
                `M ${i * 33.33 + 16.67}% 25% L 50% 50%` : 
                `M 50% 50% L ${(i-3) * 33.33 + 16.67}% 75%`}
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}