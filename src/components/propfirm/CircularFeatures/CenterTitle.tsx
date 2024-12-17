import React from 'react';
import { motion } from 'framer-motion';
import GradientBorder from '../../ui/GradientBorder';

export default function CenterTitle() {
  return (
    <GradientBorder>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
        <motion.h2 
          className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Prop Firm Solutions
        </motion.h2>
        <motion.p 
          className="text-lg text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive suite of tools for modern prop firms
        </motion.p>
      </div>
    </GradientBorder>
  );
}