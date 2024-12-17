import React from 'react';
import { Users, DollarSign, Wallet, CheckCircle, Award, Clock, AlertTriangle, UserCheck } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';

const statsCards = [
  {
    icon: Users,
    label: 'Active Funded Accounts',
    value: '237',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400'
  },
  {
    icon: UserCheck,
    label: 'Active Traders',
    value: '3,567',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-400'
  },
  {
    icon: DollarSign,
    label: 'Total Revenue',
    value: '$12.5M',
    bgColor: 'bg-green-500/10',
    textColor: 'text-green-400'
  },
  {
    icon: Wallet,
    label: 'Total Payouts',
    value: '$2.3M',
    bgColor: 'bg-yellow-500/10',
    textColor: 'text-yellow-400'
  },
  {
    icon: CheckCircle,
    label: 'Affiliates',
    value: '456',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400'
  },
  {
    icon: Award,
    label: 'Stage 1 Passes',
    value: '892',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-cyan-400'
  },
  {
    icon: Award,
    label: 'Stage 2 Passes',
    value: '67',
    bgColor: 'bg-pink-500/10',
    textColor: 'text-pink-400'
  },
  {
    icon: Clock,
    label: 'Pending Tasks',
    value: '45',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400'
  }
];

export default function AdminPanel() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Admin Panel Interface</h2>
        <p className="text-slate-400">Comprehensive management tools for prop firm administrators</p>
      </div>

      <GradientBorder>
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                  <div>
                    <p className="text-slate-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity Table */}
          <div className="bg-slate-900 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-slate-700">
                    <th className="pb-3 text-slate-400 font-medium">Trader</th>
                    <th className="pb-3 text-slate-400 font-medium">Action</th>
                    <th className="pb-3 text-slate-400 font-medium">Amount</th>
                    <th className="pb-3 text-slate-400 font-medium">Status</th>
                    <th className="pb-3 text-slate-400 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { trader: 'John Doe', action: 'Challenge Started', amount: '$100,000', status: 'Active', time: '2m ago' },
                    { trader: 'Jane Smith', action: 'Withdrawal Request', amount: '$2,500', status: 'Pending', time: '5m ago' },
                    { trader: 'Mike Johnson', action: 'Challenge Completed', amount: '$50,000', status: 'Completed', time: '10m ago' },
                    { trader: 'Sarah Wilson', action: 'Account Funded', amount: '$75,000', status: 'Processed', time: '15m ago' },
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-slate-700">
                      <td className="py-3 text-white">{item.trader}</td>
                      <td className="py-3 text-slate-300">{item.action}</td>
                      <td className="py-3 text-slate-300">{item.amount}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                          item.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' :
                          item.status === 'Completed' ? 'bg-blue-500/10 text-blue-400' :
                          'bg-purple-500/10 text-purple-400'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 text-slate-400">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </GradientBorder>
    </section>
  );
}