import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedPrismLogo() {
  return (
    <div className="flex justify-center mb-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-20 h-20"
      >
        {/* Outer hexagon with gradient */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-xl transform rotate-45">
            <div className="absolute inset-[5px] bg-slate-900 rounded-xl" />
          </div>
        </motion.div>

        {/* Inner rotating prisms */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 relative">
              {[0, 120, 240].map((rotation, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-300 transform rotate-45" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center static diamond */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-tr from-purple-400 to-pink-300 transform rotate-45" />
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse" />
      </motion.div>
    </div>
  );
}