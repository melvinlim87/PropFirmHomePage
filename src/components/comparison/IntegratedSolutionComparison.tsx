import React from 'react';
import { Server, Network, DollarSign, Workflow, Box, Layers, ArrowRight, ArrowLeft, Database, Cloud } from 'lucide-react';
import PrismEffect from '../ui/PrismEffect';
import GradientBorder from '../ui/GradientBorder';

export default function IntegratedSolutionComparison() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <PrismEffect>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Integrated Advantage
            </h2>
          </PrismEffect>
          <p className="text-lg text-slate-400 max-w-none mx-auto whitespace-nowrap">
            Unlike traditional solutions that rely on third-party platforms, PrismTraders offers a fully integrated ecosystem
          </p>
        </div>

        {/* Rest of the component remains unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GradientBorder>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Server className="w-6 h-6 text-red-400 animate-pulse" />
                  Traditional Solutions
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-300 group/item">
                    <Box className="w-5 h-5 text-red-400 group-hover/item:rotate-12 transition-transform" />
                    <span className="group-hover/item:text-red-400 transition-colors">Multiple third-party platforms</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 group/item">
                    <Network className="w-5 h-5 text-red-400 group-hover/item:rotate-12 transition-transform" />
                    <span className="group-hover/item:text-red-400 transition-colors">Complex integration requirements</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 group/item">
                    <DollarSign className="w-5 h-5 text-red-400 group-hover/item:rotate-12 transition-transform" />
                    <span className="group-hover/item:text-red-400 transition-colors">Higher operational costs</span>
                  </li>
                </ul>

                {/* Animated Vector Illustration */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32">
                  <div className="relative w-full h-full">
                    {/* Disconnected Servers Animation */}
                    <div className="absolute inset-0 flex items-center justify-around">
                      <Server className="w-10 h-10 text-red-400/50 animate-bounce" style={{ animationDelay: '0s' }} />
                      <ArrowRight className="w-6 h-6 text-red-400/30 animate-pulse" />
                      <Database className="w-10 h-10 text-red-400/50 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <ArrowRight className="w-6 h-6 text-red-400/30 animate-pulse" />
                      <Cloud className="w-10 h-10 text-red-400/50 animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                    {/* Connection Lines */}
                    <div className="absolute inset-0">
                      <div className="w-full h-0.5 bg-gradient-to-r from-red-400/20 via-red-400/10 to-transparent animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GradientBorder>

          <GradientBorder>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-emerald-400 animate-pulse" />
                  PrismTraders Solution
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-300 group/item">
                    <Box className="w-5 h-5 text-emerald-400 group-hover/item:rotate-12 transition-transform" />
                    <span className="group-hover/item:text-emerald-400 transition-colors">Single unified platform</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 group/item">
                    <Layers className="w-5 h-5 text-emerald-400 group-hover/item:rotate-12 transition-transform" />
                    <span className="group-hover/item:text-emerald-400 transition-colors">Seamless integration</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 group/item">
                    <DollarSign className="w-5 h-5 text-emerald-400 group-hover/item:rotate-12 transition-transform" />
                    <span className="group-hover/item:text-emerald-400 transition-colors">Cost-effective solution</span>
                  </li>
                </ul>

                {/* Animated Vector Illustration */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32">
                  <div className="relative w-full h-full">
                    {/* Unified Platform Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-400/20 rounded-lg animate-ping" />
                        <div className="relative bg-emerald-400/30 p-3 rounded-lg">
                          <Workflow className="w-12 h-12 text-emerald-400" />
                        </div>
                        {/* Orbiting Elements */}
                        <div className="absolute inset-0 animate-spin-slow">
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <Database className="w-6 h-6 text-emerald-400/70" />
                          </div>
                          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                            <Cloud className="w-6 h-6 text-emerald-400/70" />
                          </div>
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                            <Server className="w-6 h-6 text-emerald-400/70" />
                          </div>
                          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
                            <Box className="w-6 h-6 text-emerald-400/70" />
                          </div>
                        </div>
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