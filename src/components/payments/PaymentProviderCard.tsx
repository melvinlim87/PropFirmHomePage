import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Globe, Shield, Zap } from 'lucide-react';
import type { PaymentProvider } from './providers';

const IconMap = {
  CreditCard,
  Globe,
  Shield,
  Zap
};

interface PaymentProviderCardProps {
  provider: PaymentProvider;
  index: number;
}

export default function PaymentProviderCard({ provider, index }: PaymentProviderCardProps) {
  const Icon = IconMap[provider.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-1/4"
    >
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 h-full">
        <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${provider.gradient} p-0.5`}>
          <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <h3 className={`text-lg font-bold text-center bg-gradient-to-r ${provider.gradient} bg-clip-text text-transparent mb-2`}>
          {provider.name}
        </h3>
        
        <p className="text-slate-400 text-xs text-center mb-3">
          {provider.description}
        </p>

        <div className="flex flex-col gap-1.5">
          {provider.features.map((feature, idx) => (
            <div
              key={idx}
              className={`px-2 py-1 rounded-lg bg-gradient-to-r ${provider.gradient} bg-opacity-10 text-xs text-center`}
            >
              <span className="text-white text-xs">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}