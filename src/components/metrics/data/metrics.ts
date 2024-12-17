import { Target, Award, Zap, Clock, TrendingUp, Laptop } from 'lucide-react';
import type { MetricItem } from '../types';

export const metrics: MetricItem[] = [
  {
    icon: Target,
    value: '99.9%',
    label: 'Risk Compliance',
    gradient: 'from-blue-400 to-cyan-400',
    percentage: 99.9
  },
  {
    icon: Award,
    value: '85%',
    label: 'Trader Retention',
    gradient: 'from-purple-400 to-pink-400',
    percentage: 85
  },
  {
    icon: Zap,
    value: '-65%',
    label: 'Processing Time',
    gradient: 'from-emerald-400 to-teal-400',
    percentage: 65
  },
  {
    icon: Clock,
    value: '+40%',
    label: 'Time Saved',
    gradient: 'from-amber-400 to-orange-400',
    percentage: 40
  },
  {
    icon: TrendingUp,
    value: '+75%',
    label: 'Productivity Boost',
    gradient: 'from-rose-400 to-red-400',
    percentage: 75
  },
  {
    icon: Laptop,
    value: '24/7',
    label: 'System Uptime',
    gradient: 'from-indigo-400 to-violet-400',
    percentage: 100
  }
];