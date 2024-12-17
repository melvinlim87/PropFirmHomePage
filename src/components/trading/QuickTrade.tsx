import React from 'react';

export default function QuickTrade() {
  return (
    <div className="bg-slate-900 rounded-xl p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Quick Trade</h3>
      <div className="space-y-3">
        <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
          Buy
        </button>
        <button className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
          Sell
        </button>
      </div>
    </div>
  );
}