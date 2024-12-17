import { Point } from './types';

export function calculateCircularPoints(radius: number, count: number): Point[] {
  const startAngle = -90; // Start from top
  const angleStep = (360 / count);
  
  return Array.from({ length: count }).map((_, index) => {
    const angle = ((startAngle + index * angleStep) * Math.PI) / 180;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  });
}

export function calculateArcPath(start: Point, end: Point, centerPoint: number): string {
  const radius = Math.sqrt(Math.pow(start.x, 2) + Math.pow(start.y, 2));
  const startAngle = Math.atan2(start.y, start.x);
  const endAngle = Math.atan2(end.y, end.x);
  
  const largeArcFlag = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
  
  return `M ${start.x + centerPoint} ${start.y + centerPoint} 
          A ${radius} ${radius} 0 ${largeArcFlag} 1 
          ${end.x + centerPoint} ${end.y + centerPoint}`;
}