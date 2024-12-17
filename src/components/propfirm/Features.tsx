import React from 'react';
import { Shield, Users, Database, BarChart4, Wallet, Brain } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';

const features = [
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Advanced risk monitoring and automated position management tools.',
    gradient: 'from-cyan-400 to-blue-400',
    features: ['Position Limits', 'Risk Analytics', 'Auto Hedging', 'Loss Prevention']
  },
  {
    icon: Users,
    title: 'Trader Management',
    description: 'Comprehensive trader oversight with detailed performance analytics.',
    gradient: 'from-purple-400 to-pink-400',
    features: ['Performance Tracking', 'Account Controls', 'Trading History', 'Compliance Tools']
  },
  {
    icon: Database,
    title: 'Account System',
    description: 'Streamlined account creation and management with automated processes.',
    gradient: 'from-emerald-400 to-teal-400',
    features: ['Instant Setup', 'Auto Verification', 'Balance Management', 'Payment Processing']
  },
  {
    icon: BarChart4,
    title: 'Analytics Engine',
    description: 'Deep insights into trading patterns and performance metrics.',
    gradient: 'from-amber-400 to-orange-400',
    features: ['Pattern Analysis', 'Risk Metrics', 'Profit Attribution', 'Performance Reports']
  },
  {
    icon: Wallet,
    title: 'Capital Management',
    description: 'Efficient allocation and management of trading capital.',
    gradient: 'from-rose-400 to-red-400',
    features: ['Fund Allocation', 'Profit Sharing', 'Drawdown Control', 'Balance Tracking']
  },
  {
    icon: Brain,
    title: 'Smart Systems',
    description: 'AI-powered trading tools and automated risk management.',
    gradient: 'from-indigo-400 to-violet-400',
    features: ['Pattern Detection', 'Risk Prediction', 'Auto Adjustments', 'Smart Alerts']
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <GradientBorder key={index}>
          <div className="relative group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl overflow-hidden">
            {/* Glowing background effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Icon */}
            <div className="relative mb-4">
              <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl rotate-12 opacity-10`} />
              <div className={`relative w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl p-0.5 rotate-12`}>
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center -rotate-12">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{feature.description}</p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-2">
              {feature.features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </GradientBorder>
      ))}
    </div>
  );
}