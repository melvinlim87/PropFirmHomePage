import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, BarChart2, Users, Shield } from 'lucide-react';

export default function CenterIcon() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Outer rotating hexagon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-xl transform rotate-45">
          <div className="absolute inset-[8px] bg-slate-900 rounded-lg" />
        </div>
      </motion.div>

      {/* Inner rotating elements */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 relative">
            {[0, 120, 240].map((rotation, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center"
                style={{ transform: `rotate(${rotation}deg)` }}
                whileHover={{ scale: 1.1 }}
              >
                {index === 0 && <BarChart2 className="w-6 h-6 text-blue-400" />}
                {index === 1 && <Users className="w-6 h-6 text-purple-400" />}
                {index === 2 && <Shield className="w-6 h-6 text-pink-400" />}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center static hexagon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-5 bg-gradient-to-tr from-purple-400 to-pink-300 transform rotate-45" />
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse" />
    </div>
  );
}