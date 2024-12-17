import React from 'react';
import { motion } from 'framer-motion';
import GradientBorder from '../ui/GradientBorder';

export default function CenterTitle() {
  return (
    <div className="absolute z-20 text-center">
      <GradientBorder>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Prop Firm Solutions
          </motion.h2>
          <motion.p 
            className="text-slate-400 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive suite of tools for modern prop firms
          </motion.p>
        </div>
      </GradientBorder>
    </div>
  );
}