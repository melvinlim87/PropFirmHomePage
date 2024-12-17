import React from 'react';
import { Database } from 'lucide-react';

const metrics = [
  { label: 'Payouts', value: '5%' },
  { label: 'Revenue', value: '85%' },
  { label: 'Leads', value: '95%' }
];

export default function HeroChart() {
  return (
    <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 mb-8">
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg text-white font-semibold group-hover:text-blue-400 transition-colors">Proprietary Data</h3>
            <p className="text-base text-slate-400">Real-time Analytics</p>
          </div>
          <Database className="text-blue-400 w-6 h-6 group-hover:rotate-12 transition-transform" />
        </div>
        
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-base text-slate-300">{metric.label}</span>
                <span className="text-base font-medium text-blue-400">{metric.value}</span>
              </div>
              <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 transform -translate-x-full hover:translate-x-0 transition-transform duration-1000"
                  style={{ 
                    width: metric.value,
                    transitionDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}