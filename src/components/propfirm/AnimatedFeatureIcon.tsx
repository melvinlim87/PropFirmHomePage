import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnimatedFeatureIconProps {
  icon: LucideIcon;
  gradient: string;
}

export default function AnimatedFeatureIcon({ icon: Icon, gradient }: AnimatedFeatureIconProps) {
  return (
    <div className="relative">
      {/* Main rotating container */}
      <motion.div
        className="w-24 h-24 relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer hexagon with gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl transform rotate-45`}>
          <div className="absolute inset-[3px] bg-slate-900 rounded-lg" />
        </div>

        {/* Inner rotating elements */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 relative">
              {[0, 120, 240].map((rotation, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className={`w-2 h-2 bg-gradient-to-r ${gradient} transform rotate-45`} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg p-0.5`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Animated glow effect */}
        <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} rounded-xl blur-xl opacity-20 animate-pulse`} />
      </motion.div>

      {/* Decorative circuit lines */}
      <div className="absolute -inset-4 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10`}>
          <div className="absolute inset-0 bg-circuit-pattern" />
        </div>
      </div>
    </div>
  );
}