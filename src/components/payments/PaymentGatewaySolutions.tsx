import React from 'react';
import { CreditCard, Code, Zap, Globe } from 'lucide-react';
import PaymentProviderCarousel from './PaymentProviderCarousel';
import AnimatedTitle from '../ui/AnimatedTitle';
import { motion } from 'framer-motion';

const features = [
  {
    icon: CreditCard,
    title: 'Multiple Payment Methods',
    description: 'Support for credit cards, wire transfers, and cryptocurrencies',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    icon: Code,
    title: 'Custom APIs',
    description: 'Flexible integration with customizable API endpoints and webhooks',
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Real-time payment processing with instant confirmations',
    gradient: 'from-emerald-400 to-teal-400'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Support for multiple currencies and payment regions',
    gradient: 'from-amber-400 to-orange-400'
  }
];

export default function PaymentGatewaySolutions() {
  return (
    <section id="payment-solutions" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedTitle 
          title="Payment Gateway Solutions"
          subtitle="Comprehensive payment processing with support for multiple global providers"
          gradient="from-blue-400 via-cyan-300 to-purple-400"
        />

        {/* Hexagonal Feature Grid */}
        <div className="mt-16 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex items-center gap-6">
                    {/* Animated Icon Container */}
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                        <div className={`relative w-full h-full rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5`}>
                          <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                            <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Payment Provider Carousel */}
        <PaymentProviderCarousel />
      </div>
    </section>
  );
}