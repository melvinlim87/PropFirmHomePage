import { Settings, Users, Database, Shield } from 'lucide-react';

export const adminFeatures = [
  {
    icon: Settings,
    title: 'Admin Management',
    description: 'Comprehensive administration tools with real-time monitoring and automated workflows.',
    gradient: 'from-blue-400 to-cyan-400',
    features: [
      'Payouts Management',
      'Challenges Configuration',
      'Affiliates Structure',
      'Promo Codes Creation'
    ]
  },
  {
    icon: Users,
    title: 'Trader Management',
    description: 'Complete trader oversight with detailed performance analytics and reporting.',
    gradient: 'from-purple-400 to-pink-400',
    features: [
      'Performance Tracking',
      'Compliance Monitoring',
      'Account Management',
      'Trading History'
    ]
  },
  {
    icon: Database,
    title: 'Account Management',
    description: 'Streamlined account creation and management system with automated processes.',
    gradient: 'from-emerald-400 to-teal-400',
    features: [
      'Instant Verification',
      'Automated Account Creation',
      'Payment Processing',
      'Balance Management'
    ]
  },
  {
    icon: Shield,
    title: 'Performance Analytics',
    description: 'Deep insights into trading patterns, risk metrics, and profit attribution.',
    gradient: 'from-amber-400 to-orange-400',
    features: [
      'Trading Patterns',
      'Risk Analysis',
      'Profit Attribution',
      'Performance Reports'
    ]
  }
];