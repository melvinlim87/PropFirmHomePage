import { Shield, Users, Database, BarChart4, Wallet, Brain } from 'lucide-react';
import type { Feature } from './types';

export const features: Feature[] = [
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Advanced risk monitoring and automated position management',
    gradient: 'from-blue-400 to-cyan-400',
    metrics: [
      { label: 'Risk Compliance', value: '99.9%', trend: 1.2 },
      { label: 'Auto Hedging', value: '24/7', trend: 0 },
      { label: 'Position Limits', value: 'Dynamic' }
    ]
  },
  {
    icon: Users,
    title: 'Trader Management',
    description: 'Comprehensive trader oversight and performance analytics',
    gradient: 'from-purple-400 to-pink-400',
    metrics: [
      { label: 'Active Traders', value: '10,000+', trend: 15.3 },
      { label: 'Success Rate', value: '85%', trend: 5.2 },
      { label: 'Avg. Retention', value: '18 months' }
    ]
  },
  {
    icon: Database,
    title: 'Account System',
    description: 'Streamlined account creation and management system',
    gradient: 'from-emerald-400 to-teal-400',
    metrics: [
      { label: 'Processing Time', value: '< 1min', trend: -35.8 },
      { label: 'Auto Verification', value: '95%', trend: 12.4 },
      { label: 'System Uptime', value: '99.99%' }
    ]
  }
];