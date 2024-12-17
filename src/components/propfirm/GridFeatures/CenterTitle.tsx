import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, BarChart2, Users, Shield } from 'lucide-react';

export default function CenterTitle() {
  return (
    <div className="relative w-[400px] mx-auto">
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-20 animate-pulse" />
        
        {/* Rotating Icon Container */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          {/* Outer rotating hexagon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-xl transform rotate-45">
              <div className="absolute inset-[3px] bg-slate-900 rounded-lg" />
            </div>
          </motion.div>

          {/* Inner rotating elements */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 relative">
                {[0, 120, 240].map((rotation, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center"
                    style={{ transform: `rotate(${rotation}deg)` }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {index === 0 && <BarChart2 className="w-4 h-4 text-blue-400" />}
                    {index === 1 && <Users className="w-4 h-4 text-purple-400" />}
                    {index === 2 && <Shield className="w-4 h-4 text-pink-400" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center static hexagon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-400 to-pink-300 transform rotate-45" />
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse" />
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold mb-1">
            <span className="text-white">Prop</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Firm</span>{' '}
            <span className="text-white">Solutions</span>
          </h3>
          <p className="text-sm text-slate-400">
            Complete suite of tools for modern prop firms
          </p>
        </motion.div>
      </div>
    </div>
  );
}