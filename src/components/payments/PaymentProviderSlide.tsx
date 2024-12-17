import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PaymentProviderSlideProps {
  provider: {
    name: string;
    icon: LucideIcon;
    gradient: string;
    features: string[];
    description: string;
  };
}

export default function PaymentProviderSlide({ provider }: PaymentProviderSlideProps) {
  const Icon = provider.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          className={`w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-r ${provider.gradient} p-0.5`}
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
            <Icon className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <motion.h3
          className={`text-4xl font-bold bg-gradient-to-r ${provider.gradient} bg-clip-text text-transparent mb-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {provider.name}
        </motion.h3>
        
        <motion.p
          className="text-xl text-slate-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {provider.description}
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {provider.features.map((feature, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-lg bg-gradient-to-r ${provider.gradient} bg-opacity-10`}
            >
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}