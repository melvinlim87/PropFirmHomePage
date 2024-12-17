import React from 'react';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export default function GradientBorder({ 
  children, 
  className = '',
  glowIntensity = 'medium'
}: GradientBorderProps) {
  return (
    <div className={`gradient-border-wrapper ${className}`}>
      <div className="gradient-border-container">
        {children}
      </div>
    </div>
  );
}