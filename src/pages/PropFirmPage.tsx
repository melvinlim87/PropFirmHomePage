import React from 'react';
import AnimatedTitle from '../components/ui/AnimatedTitle';
import TradersDashboard from '../components/propfirm/TradersDashboard';
import AdminPanel from '../components/propfirm/AdminPanel';
import GradientBorder from '../components/ui/GradientBorder';

export default function PropFirmPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle 
          title="Prop Firm Solutions"
          subtitle="Comprehensive trading and management platform built for modern prop firms"
          gradient="from-purple-400 via-pink-300 to-blue-400"
        />
        
        <div className="mt-16 space-y-16">
          {/* Traders Dashboard Section */}
          <TradersDashboard />

          {/* Admin Panel Section */}
          <AdminPanel />
        </div>
      </div>
    </div>
  );
}