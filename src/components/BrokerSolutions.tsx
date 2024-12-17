import React from 'react';
import { Shield, Users, Wallet, BarChart4, Globe, Zap, Server, Lock } from 'lucide-react';
import GradientBorder from './ui/GradientBorder';
import AnimatedTitle from './ui/AnimatedTitle';

const features = [
  {
    icon: Server,
    title: 'IB Management',
    description: 'Distributed architecture supporting multiple trading servers.',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Users,
    title: 'Client Management',
    description: 'Comprehensive CRM with KYC verification and client onboarding.',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    icon: Lock,
    title: 'Compliance Tools',
    description: 'Built-in compliance monitoring and reporting capabilities.',
    gradient: 'from-amber-500 to-orange-400'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Advanced risk monitoring and automated position management tools.',
    gradient: 'from-emerald-500 to-teal-400'
  }
];

export default function BrokerSolutions() {
  return (
    <section id="broker-solutions" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedTitle 
          title="Broker Solutions"
          subtitle="Enterprise-grade trading infrastructure for modern brokerages"
          gradient="from-emerald-400 via-teal-300 to-cyan-400"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <GradientBorder key={index}>
              <div className="group bg-slate-900 rounded-xl p-6 h-full">
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5`}>
                  <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </GradientBorder>
          ))}
        </div>

        <div className="mt-16">
          <GradientBorder>
            <div className="bg-slate-900 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Complete Brokerage Management
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Our comprehensive solution provides everything you need to run a modern brokerage operation efficiently and securely.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Multi-Asset Trading',
                      'Real-time Reporting',
                      'Payment Processing',
                      'Client Portal',
                      'API Integration',
                      'White Label Solutions'
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-lg blur-xl" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <Globe className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">150+</div>
                        <div className="text-sm text-slate-400">Countries Supported</div>
                      </div>
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">99.9%</div>
                        <div className="text-sm text-slate-400">Uptime Guaranteed</div>
                      </div>
                      <div className="text-center">
                        <Users className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">50K+</div>
                        <div className="text-sm text-slate-400">Active Clients</div>
                      </div>
                      <div className="text-center">
                        <Wallet className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">$2B+</div>
                        <div className="text-sm text-slate-400">Monthly Volume</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}