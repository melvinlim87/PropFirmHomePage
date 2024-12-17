import React from 'react';
import { motion } from 'framer-motion';

export default function CircuitBoard() {
  const generateCircuitPaths = () => {
    const paths = [];
    const numPaths = 22; // Further reduced number of paths
    const viewBoxWidth = 1920;
    const viewBoxHeight = 1080;
    const gridSize = 140; // Increased grid size for more spacing
    const usedPoints = new Set();
    
    // Create a grid of possible starting points
    const startPoints = [];
    for (let x = 0; x < viewBoxWidth; x += gridSize) {
      for (let y = 0; y < viewBoxHeight; y += gridSize) {
        if (Math.random() > 0.7) { // Only use 30% of grid points
          startPoints.push({ x, y });
        }
      }
    }

    // Shuffle start points
    for (let i = startPoints.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [startPoints[i], startPoints[j]] = [startPoints[j], startPoints[i]];
    }

    const isValidAngle = (angle) => {
      // Only allow 45 and 90 degree angles
      const validAngles = [0, 45, 90, -45, -90];
      return validAngles.some(valid => Math.abs(angle - valid) < 5);
    };

    for (let i = 0; i < numPaths; i++) {
      const startPoint = startPoints[i];
      if (!startPoint) continue;

      let attempts = 0;
      let validPath = false;
      let currentPath;

      while (!validPath && attempts < 10) {
        const path = [startPoint];
        let currentX = startPoint.x;
        let currentY = startPoint.y;
        let lastAngle = null;
        
        const segments = Math.floor(Math.random() * 2) + 2; // 2-3 segments

        for (let j = 0; j < segments; j++) {
          let validMove = false;
          let moveAttempts = 0;

          while (!validMove && moveAttempts < 8) {
            const distance = gridSize;
            const angles = [0, 45, -45]; // Removed 90 and -90 for more natural flow
            const angle = angles[Math.floor(Math.random() * angles.length)];
            
            const nextX = currentX + distance * Math.cos(angle * Math.PI / 180);
            const nextY = currentY + distance * Math.sin(angle * Math.PI / 180);

            const pointKey = `${nextX},${nextY}`;
            
            if (
              nextX >= 0 && nextX <= viewBoxWidth &&
              nextY >= 0 && nextY <= viewBoxHeight &&
              !usedPoints.has(pointKey) &&
              (!lastAngle || Math.abs(angle - lastAngle) !== 180)
            ) {
              currentX = nextX;
              currentY = nextY;
              validMove = true;
              lastAngle = angle;
              usedPoints.add(pointKey);
              path.push({ 
                x: currentX, 
                y: currentY,
                nodeSize: Math.random() < 0.3 ? 16 : 8 // Increased node sizes
              });
            }
            moveAttempts++;
          }
        }

        if (path.length > 2) {
          validPath = true;
          currentPath = path;
        }

        attempts++;
      }

      if (validPath && currentPath) {
        paths.push({
          points: currentPath,
          delay: Math.random() * 4,
          duration: Math.random() * 3 + 6 // Slower animation
        });
      }
    }
    return paths;
  };

  const circuitPaths = generateCircuitPaths();

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg 
        className="absolute w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.15)" /> {/* Reduced opacity */}
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.12)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/> {/* Reduced glow */}
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <marker
            id="dot-small"
            viewBox="0 0 16 16"
            refX="8"
            refY="8"
            markerWidth="8"
            markerHeight="8"
          >
            <circle cx="8" cy="8" r="4" fill="rgba(56, 189, 248, 0.4)"> {/* Reduced opacity */}
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          </marker>

          <marker
            id="dot-large"
            viewBox="0 0 32 32"
            refX="16"
            refY="16"
            markerWidth="16"
            markerHeight="16"
          >
            <circle cx="16" cy="16" r="8" fill="rgba(56, 189, 248, 0.4)"> {/* Reduced opacity */}
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          </marker>
        </defs>

        {circuitPaths.map((circuit, index) => {
          const pathData = circuit.points.map((point, i) => 
            `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
          ).join(' ');

          return (
            <g key={index}>
              <motion.path
                d={pathData}
                stroke="url(#lineGradient)"
                strokeWidth="1.5" // Reduced stroke width
                fill="none"
                filter="url(#glow)"
                markerStart={`url(#dot-${circuit.points[0].nodeSize > 12 ? 'large' : 'small'})`}
                markerEnd={`url(#dot-${circuit.points[circuit.points.length - 1].nodeSize > 12 ? 'large' : 'small'})`}
                markerMid={`url(#dot-small)`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1],
                  opacity: [0, 0.3, 0.2], // Reduced opacity
                }}
                transition={{
                  duration: circuit.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: circuit.delay,
                  repeatDelay: 3
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.02] via-transparent to-blue-500/[0.02]" />
    </div>
  );
}