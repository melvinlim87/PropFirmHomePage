// Utility functions for position calculations
export function calculateNodePositions(count: number, radius: number, centerX: number, centerY: number) {
  const startAngle = -90; // Start from top
  const angleStep = 360 / count;

  return Array.from({ length: count }).map((_, index) => {
    const angle = ((startAngle + (index * angleStep)) * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      angle: startAngle + (index * angleStep)
    };
  });
}