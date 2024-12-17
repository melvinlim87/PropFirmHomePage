import React from 'react';

interface FiltersProps {
  id: string;
  color: string;
}

export default function CircularProgressFilters({ id, color }: FiltersProps) {
  return (
    <defs>
      <filter id={`glow-${id}`}>
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feFlood floodColor={color} floodOpacity="0.2" result="color" /> {/* Reduced opacity */}
        <feComposite in="color" in2="blur" operator="in" result="shadow" />
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id={`innerShadow-${id}`}>
        <feOffset dx="0" dy="1" />
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feComposite operator="out" in="SourceGraphic" in2="blur" />
        <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"/> {/* Added color matrix for softer shadow */}
      </filter>
    </defs>
  );
}