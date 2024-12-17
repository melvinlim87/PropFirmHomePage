import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Provider } from './types';

interface ComparisonTableProps {
  providers: Provider[];
}

export default function ComparisonTable({ providers }: ComparisonTableProps) {
  return (
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
        {providers.map((provider, index) => (
          <motion.tr 
            key={provider.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`border-b border-slate-800 ${
              provider.highlight ? 'bg-blue-500/[0.02]' : ''
            }`}
          >
            <td className="py-4 px-4">
              <span className={`font-semibold ${
                provider.highlight ? 'text-blue-400' : 'text-white'
              }`}>
                {provider.name}
              </span>
            </td>
            <td className="py-4 px-4 text-center">
              <span className="inline-block text-slate-300 tabular-nums">{provider.setupFee}</span>
            </td>
            <td className="py-4 px-4 text-center">
              <span className="inline-block text-slate-300 tabular-nums">{provider.monthlyFee}</span>
            </td>
            <td className="py-4 px-4 text-center">
              {provider.features.webTrader ? 
                <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                <X className="w-5 h-5 text-red-400 mx-auto" />}
            </td>
            <td className="py-4 px-4 text-center">
              {provider.features.propFirmCRM ? 
                <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                <X className="w-5 h-5 text-red-400 mx-auto" />}
            </td>
            <td className="py-4 px-4 text-center">
              {provider.features.riskManagement ? 
                <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                <X className="w-5 h-5 text-red-400 mx-auto" />}
            </td>
            <td className="py-4 px-4 text-center">
              {provider.features.customization ? 
                <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                <X className="w-5 h-5 text-red-400 mx-auto" />}
            </td>
            <td className="py-4 px-4 text-center">
              {provider.features.apiAccess ? 
                <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : 
                <X className="w-5 h-5 text-red-400 mx-auto" />}
            </td>
            <td className="py-4 px-4 text-center">
              <span className={`text-sm ${
                provider.features.support === '24/7' ? 'text-emerald-400' :
                provider.features.support === 'Business Hours' ? 'text-amber-400' :
                'text-red-400'
              }`}>
                {provider.features.support}
              </span>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
}