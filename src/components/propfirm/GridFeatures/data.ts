import { Trophy, Users2, Database, BarChart2, Workflow, Shield } from 'lucide-react';
import type { Feature } from './types';

export const features: Feature[] = [
  {
    icon: Trophy,
    title: 'Leaderboard',
    description: 'Real-time performance tracking and trader rankings.',
    gradient: 'from-blue-400 to-cyan-400',
    features: ['Live Rankings', 'Performance Metrics', 'Achievement System', 'Trading Contests']
  },
  {
    icon: Users2,
    title: 'Affiliates & IB',
    description: 'Comprehensive affiliate and IB management system.',
    gradient: 'from-purple-400 to-pink-400',
    features: ['Commission Structure', 'Client Tracking', 'Marketing Tools', 'Payout Management']
  },
  {
    icon: Database,
    title: 'Admin Dashboard',
    description: 'Complete administrative control and oversight tools.',
    gradient: 'from-emerald-400 to-teal-400',
    features: ['User Management', 'System Settings', 'Analytics Tools', 'Access Control']
  },
  {
    icon: BarChart2,
    title: 'Traders Dashboard',
    description: 'Intuitive interface for trader account management.',
    gradient: 'from-amber-400 to-orange-400',
    features: ['Account Overview', 'Trading Stats', 'Challenge Progress', 'Withdrawal System']
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automated processes for efficient operations.',
    gradient: 'from-rose-400 to-red-400',
    features: ['Auto Verification', 'Smart Alerts', 'Task Automation', 'Event Triggers']
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Advanced risk monitoring and control system.',
    gradient: 'from-indigo-400 to-violet-400',
    features: ['Position Limits', 'Loss Prevention', 'Risk Analytics', 'Auto Hedging']
  }
];