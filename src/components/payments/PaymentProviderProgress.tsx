import React from 'react';
import { motion } from 'framer-motion';

interface PaymentProviderProgressProps {
  isPlaying: boolean;
}

export default function PaymentProviderProgress({ isPlaying }: PaymentProviderProgressProps) {
  return (
    <div className="absolute left-0 right-0 top-0 h-1 bg-slate-800">
      {isPlaying && (
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
    </div>
  );
}