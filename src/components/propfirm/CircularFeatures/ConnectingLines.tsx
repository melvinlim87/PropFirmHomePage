import React from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
}

interface ConnectingLinesProps {
  nodes: Node[];
}

export default function ConnectingLines({ nodes }: ConnectingLinesProps) {
  const centerX = 400;
  const centerY = 300;

  return (
    <svg className="absolute inset-0 w-full h-full">
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

      {nodes.map((node, index) => {
        const nextNode = nodes[(index + 1) % nodes.length];
        
        return (
          <g key={index}>
            {/* Line to center */}
            <motion.line
              x1={node.x}
              y1={node.y}
              x2={centerX}
              y2={centerY}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
            
            {/* Curved line to next node */}
            <motion.path
              d={`M ${node.x} ${node.y} Q ${centerX} ${centerY} ${nextNode.x} ${nextNode.y}`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.15 }}
            />
          </g>
        );
      })}
    </svg>
  );
}