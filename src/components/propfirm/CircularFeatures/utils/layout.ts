import type { Point } from '../types';

interface NodePosition extends Point {
  angle: number;
}

// Pre-calculated positions for 6 features in a circle
export const featurePositions: NodePosition[] = [
  { x: 400, y: 50, angle: -90 },    // Top
  { x: 650, y: 175, angle: -30 },   // Top Right
  { x: 650, y: 425, angle: 30 },    // Bottom Right
  { x: 400, y: 550, angle: 90 },    // Bottom
  { x: 150, y: 425, angle: 150 },   // Bottom Left
  { x: 150, y: 175, angle: 210 }    // Top Left
];