import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  title: string;
  subtitle?: string;
  gradient?: string;
  align?: 'left' | 'center' | 'right';
}

export default function AnimatedTitle({ 
  title, 
  subtitle,
  gradient = 'from-blue-400 via-cyan-300 to-purple-400',
  align = 'center' 
}: AnimatedTitleProps) {
  const words = title.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div className={`relative ${align === 'center' ? 'text-center' : ''}`}>
      <motion.div
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={child}
              className={`text-3xl md:text-4xl font-bold ${
                idx === words.length - 2 ? `bg-gradient-to-r ${gradient} bg-clip-text text-transparent` : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>
        {subtitle && (
          <motion.p
            variants={child}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
      
      {/* Animated background glow */}
      <div className="absolute -inset-x-20 -top-[50%] -bottom-[20%] z-0">
        <div 
          className={`h-full w-full bg-gradient-to-r ${gradient} opacity-10 blur-3xl animate-pulse`}
          style={{ animationDuration: '4s' }}
        />
      </div>
    </div>
  );
}