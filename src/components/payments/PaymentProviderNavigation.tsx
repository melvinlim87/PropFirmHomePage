import React from 'react';
import { motion } from 'framer-motion';

interface PaymentProviderNavigationProps {
  activeIndex: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

export default function PaymentProviderNavigation({
  activeIndex,
  totalSlides,
  onSlideChange
}: PaymentProviderNavigationProps) {
  return (
    <div className="flex justify-center gap-3 mt-8">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
            index === activeIndex ? 'bg-blue-400' : 'bg-slate-700'
          }`}
        >
          {index === activeIndex && (
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400"
              layoutId="activeDot"
            />
          )}
        </button>
      ))}
    </div>
  );
}