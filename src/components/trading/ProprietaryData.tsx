import React, { useEffect, useState } from 'react';

export default function ProprietaryData() {
  const [percentages, setPercentages] = useState({
    profitFactor: 0,
    balance: 0,
    profits: 0,
    equity: 0,
    floatingLoss: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentages({
        profitFactor: Math.floor(Math.random() * 20) + 80, // 80-100%
        balance: Math.floor(Math.random() * 15) + 75, // 75-90%
        profits: Math.floor(Math.random() * 20) + 60, // 60-80%
        equity: Math.floor(Math.random() * 15) + 70, // 70-85%
        floatingLoss: Math.floor(Math.random() * 10) + 85, // 85-95%
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: 'Profit Factor', value: percentages.profitFactor, color: 'from-emerald-500 to-emerald-400', textColor: 'text-emerald-300' },
    { label: 'Balance', value: percentages.balance, color: 'from-blue-500 to-blue-400', textColor: 'text-blue-300' },
    { label: 'Profits', value: percentages.profits, color: 'from-cyan-500 to-cyan-400', textColor: 'text-cyan-300' },
    { label: 'Equity', value: percentages.equity, color: 'from-purple-500 to-purple-400', textColor: 'text-purple-300' },
    { label: 'Floating Loss', value: percentages.floatingLoss, color: 'from-amber-500 to-amber-400', textColor: 'text-amber-300' }
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Proprietary Data</h3>
      <div className="space-y-4">
        {metrics.map(({ label, value, color, textColor }) => (
          <div key={label}>
            <div className="text-sm mb-2">
              <span className="text-slate-400">{label}</span>
              <span className={`float-right ${textColor} text-xs font-medium`}>
                {value}%
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden relative">
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${color} transition-all duration-1000 ease-in-out`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}