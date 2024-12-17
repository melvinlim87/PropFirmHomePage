import { Point } from './types';

export function generateCircularPoints(
  radius: number,
  count: number,
  startAngle: number = 45
): Point[] {
  return Array.from({ length: count }).map((_, index) => {
    const angle = (index * (360 / count) + startAngle) * (Math.PI / 180);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  });
}

export function calculateArcPath(
  startPoint: Point,
  endPoint: Point,
  radius: number,
  centerOffset: number = 100
): string {
  const x1 = startPoint.x + radius + centerOffset;
  const y1 = startPoint.y + radius + centerOffset;
  const x2 = endPoint.x + radius + centerOffset;
  const y2 = endPoint.y + radius + centerOffset;

  return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`;
}