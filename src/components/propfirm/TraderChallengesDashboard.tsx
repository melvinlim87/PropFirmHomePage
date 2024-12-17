import React from 'react';
import { Clock, Target, Scale, TrendingDown, Percent } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';

interface ChallengeMetric {
  icon: React.ReactNode;
  label: string;
  current: string | number;
  target: string | number;
  progress: number;
  status: 'success' | 'warning' | 'danger';
}

const challengeMetrics: ChallengeMetric[] = [
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Minimum Trading Days',
    current: '2',
    target: '4',
    progress: 50,
    status: 'warning'
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    label: 'Maximum Drawdown',
    current: '1.8%',
    target: '4%',
    progress: 45,
    status: 'success'
  },
  {
    icon: <Target className="w-5 h-5" />,
    label: 'Profit Target',
    current: '4.2%',
    target: '8%',
    progress: 52.5,
    status: 'success'
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    label: 'Average Trade DD',
    current: '1.2%',
    target: '5%',
    progress: 24,
    status: 'success'
  },
  {
    icon: <Scale className="w-5 h-5" />,
    label: 'Lot Size Consistency',
    current: '1.5',
    target: '2',
    progress: 75,
    status: 'success'
  },
  {
    icon: <Percent className="w-5 h-5" />,
    label: 'Win Rate',
    current: '65.5%',
    target: '50%',
    progress: 131,
    status: 'success'
  }
];

export default function TraderChallengesDashboard() {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-white">2 Step $5,000 Challenge</h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-slate-400">Started on 3/1/2024</span>
              <span className="text-slate-400">Login ID: 12345678</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm">
            Trading Rules Check
          </button>
        </div>

        {/* Step 1 Objectives */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-white">Step 1 Objectives</h4>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              In Progress
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challengeMetrics.map((metric, index) => (
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
        </div>

        {/* Step 2 Objectives */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-white">Step 2 Objectives</h4>
            <span className="px-3 py-1 bg-slate-500/10 text-slate-400 rounded-full text-sm flex items-center gap-2">
              <span className="w-4 h-4">🔒</span>
              Locked
            </span>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-6 text-center text-slate-400">
            Complete Step 1 to unlock
          </div>
        </div>
      </div>
    </div>
  );
}