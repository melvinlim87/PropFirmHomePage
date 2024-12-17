import { Shield, Users, Database, BarChart4, Wallet, Brain } from 'lucide-react';
import type { Feature } from './types';

export const features: Feature[] = [
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Advanced risk monitoring and automated position control',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    icon: Users,
    title: 'Trader Portal',
    description: 'Complete management suite with performance tracking',
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    icon: Database,
    title: 'Account System',
    description: 'Streamlined account creation and management',
    gradient: 'from-emerald-400 to-teal-400'
  },
  {
    icon: BarChart4,
    title: 'Analytics Engine',
    description: 'Real-time insights and performance metrics',
    gradient: 'from-amber-400 to-orange-400'
  },
  {
    icon: Wallet,
    title: 'Capital Management',
    description: 'Efficient allocation and profit distribution',
    gradient: 'from-rose-400 to-red-400'
  },
  {
    icon: Brain,
    title: 'Smart Systems',
    description: 'AI-powered tools and automated risk management',
    gradient: 'from-indigo-400 to-violet-400'
  }
];