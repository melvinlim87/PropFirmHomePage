import React from 'react';
import { TrendingDown, DollarSign, Percent, Scale, Wallet } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  current: string | number;
  target: string | number;
  progress: number;
  status?: 'success' | 'warning' | 'danger';
}

const metrics: MetricProps[] = [
  {
    icon: <TrendingDown className="w-5 h-5" />,
    label: 'Maximum Drawdown',
    current: '1.2%',
    target: '4%',
    progress: 30,
    status: 'success'
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    label: 'Total Profits',
    current: '$12,500',
    target: '∞',
    progress: 75,
    status: 'success'
  },
  {
    icon: <Percent className="w-5 h-5" />,
    label: 'Profit Percentage',
    current: '125%',
    target: '∞',
    progress: 85,
    status: 'success'
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    label: 'Average Trade DD',
    current: '0.9%',
    target: '5%',
    progress: 18,
    status: 'success'
  },
  {
    icon: <Scale className="w-5 h-5" />,
    label: 'Lot Size Consistency',
    current: '1.1',
    target: '2',
    progress: 55,
    status: 'success'
  },
  {
    icon: <Percent className="w-5 h-5" />,
    label: 'Win Rate',
    current: '75.5%',
    target: '50%',
    progress: 151,
    status: 'success'
  }
];

export default function FundedAccount() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Funded Account</h3>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          In Progress
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <GradientBorder key={index}>
            <div className="bg-slate-900 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-slate-400">
                  {metric.icon}
                  <span>{metric.label}</span>
                </div>
                <span className="text-white">
                  {metric.current} / {metric.target}
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    metric.status === 'success' ? 'bg-green-500' :
                    metric.status === 'warning' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(metric.progress, 100)}%` }}
                />
              </div>
            </div>
          </GradientBorder>
        ))}
      </div>

      <GradientBorder>
        <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
          <Wallet className="w-5 h-5" />
          Request for Withdrawal
        </button>
      </GradientBorder>
    </div>
  );
}