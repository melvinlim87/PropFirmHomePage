import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';
import AnimatedTitle from '../ui/AnimatedTitle';

const competitors = [
  {
    name: 'MetaTrader',
    setupFee: '$5,000',
    monthlyFee: '$2,000',
    features: {
      webTrader: true,
      propFirmCRM: false,
      riskManagement: true,
      customization: false,
      apiAccess: true,
      support: 'Limited'
    }
  },
  {
    name: 'B2BBroker',
    setupFee: '$10,000',
    monthlyFee: '$3,500',
    features: {
      webTrader: false,
      propFirmCRM: true,
      riskManagement: true,
      customization: true,
      apiAccess: true,
      support: '24/7'
    }
  },
  {
    name: 'Leverate',
    setupFee: '$7,500',
    monthlyFee: '$2,500',
    features: {
      webTrader: true,
      propFirmCRM: false,
      riskManagement: true,
      customization: false,
      apiAccess: true,
      support: 'Business Hours'
    }
  },
  {
    name: 'cTrader',
    setupFee: '$4,000',
    monthlyFee: '$1,800',
    features: {
      webTrader: true,
      propFirmCRM: false,
      riskManagement: true,
      customization: false,
      apiAccess: true,
      support: 'Limited'
    }
  },
  {
    name: 'PrismTraders',
    setupFee: '$2,500',
    monthlyFee: '$1,500',
    features: {
      webTrader: true,
      propFirmCRM: true,
      riskManagement: true,
      customization: true,
      apiAccess: true,
      support: '24/7'
    },
    highlight: true
  }
];

export default function PriceComparison() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle 
          title="Competitive Pricing"
          subtitle="Compare our comprehensive solution with other providers"
          gradient="from-blue-400 via-purple-300 to-pink-400"
        />

        <div className="mt-16">
          <GradientBorder>
            <div className="bg-slate-900 rounded-xl p-6 w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Provider</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">Setup Fee</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">Monthly Fee</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">WebTrader</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">CRM</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">Risk</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">Custom</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">API</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">Support</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((competitor, index) => (
                    <motion.tr 
                      key={competitor.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-b border-slate-800 ${
                        competitor.highlight ? 'bg-blue-500/5' : ''
                      }`}
                    >
                      <td className="py-4 px-4">
                        <span className={`font-semibold ${
                          competitor.highlight ? 'text-blue-400' : 'text-white'
                        }`}>
                          {competitor.name}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="inline-block text-slate-300 tabular-nums">{competitor.setupFee}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="inline-block text-slate-300 tabular-nums">{competitor.monthlyFee}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.features.webTrader ? 
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                          <X className="w-5 h-5 text-red-400 mx-auto" />}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.features.propFirmCRM ? 
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                          <X className="w-5 h-5 text-red-400 mx-auto" />}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.features.riskManagement ? 
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                          <X className="w-5 h-5 text-red-400 mx-auto" />}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.features.customization ? 
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                          <X className="w-5 h-5 text-red-400 mx-auto" />}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.features.apiAccess ? 
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                          <X className="w-5 h-5 text-red-400 mx-auto" />}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`text-sm ${
                          competitor.features.support === '24/7' ? 'text-emerald-400' :
                          competitor.features.support === 'Business Hours' ? 'text-amber-400' :
                          'text-red-400'
                        }`}>
                          {competitor.features.support}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}