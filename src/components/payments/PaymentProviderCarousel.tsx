import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Globe, Shield, Zap, Wallet, Building2 } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';
import { providers } from './providers';

const IconMap = {
  CreditCard,
  Globe,
  Shield,
  Zap,
  Wallet,
  Building2
};

export default function PaymentProviderCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 4) % providers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentProviders = providers.slice(activeIndex, activeIndex + 4);
  const Icon = IconMap[providers[activeIndex].iconName];

  return (
    <GradientBorder>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
        {/* Progress Bar */}
        <div className="relative h-1 bg-slate-700 rounded-full mb-12">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Carousel Content */}
        <div className="flex gap-6">
          <AnimatePresence mode="wait">
            {currentProviders.map((provider, index) => {
              const Icon = IconMap[provider.iconName];
              return (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${provider.gradient} p-0.5`}>
                      <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold bg-gradient-to-r ${provider.gradient} bg-clip-text text-transparent mb-2`}>
                      {provider.name}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-4">
                      {provider.description}
                    </p>

                    <div className="space-y-2">
                      {provider.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${provider.gradient} bg-opacity-10`}
                        >
                          <span className="text-white text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(providers.length / 4) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx * 4);
                setIsAutoPlaying(false);
              }}
              className={`w-8 h-2 rounded-full transition-all ${
                Math.floor(activeIndex / 4) === idx
                  ? 'bg-blue-400'
                  : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </GradientBorder>
  );
}