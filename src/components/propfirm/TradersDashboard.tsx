import React from 'react';
import { LogIn, User, MonitorPlay, Trophy, CreditCard, Users2, HelpCircle, FileText, Share2, BookOpen } from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';
import TraderChallengesDashboard from './TraderChallengesDashboard';
import FundedAccount from './FundedAccount';

const navigationItems = [
  { icon: LogIn, label: 'Login' },
  { icon: User, label: 'Profile' },
  { icon: MonitorPlay, label: 'Web Trader' },
  { icon: Trophy, label: 'My Challenges' },
  { icon: BookOpen, label: 'My Academy' },
  { icon: Users2, label: 'My Referrals' },
  { icon: CreditCard, label: 'Billing' },
  { icon: Trophy, label: 'Leaderboard' },
  { icon: FileText, label: 'Certificates' },
  { icon: Share2, label: 'Social Media' },
  { icon: HelpCircle, label: 'Help & Support' },
  { icon: FileText, label: 'FAQ' },
  { icon: FileText, label: 'Terms of Service' }
];

export default function TradersDashboard() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Traders' Dashboard Interface</h2>
        <p className="text-slate-400">Complete trading platform with evaluation tracking and account management</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Navigation Sidebar with hidden scrollbar */}
        <div className="col-span-3">
          <div className="sticky top-24">
            <GradientBorder>
              <div className="bg-slate-800 rounded-xl p-2 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide">
                <nav className="space-y-1 pb-3"> {/* Reduced vertical spacing */}
                  {navigationItems.map((item, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center gap-3 px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </GradientBorder>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-9 space-y-6">
          <GradientBorder>
            <div className="bg-slate-800 rounded-xl p-6">
              <TraderChallengesDashboard />
            </div>
          </GradientBorder>

          <GradientBorder>
            <div className="bg-slate-800 rounded-xl p-6">
              <FundedAccount />
            </div>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}