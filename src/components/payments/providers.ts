import { CreditCard, Globe, Shield, Zap, Wallet, Building2 } from 'lucide-react';

export type PaymentProvider = {
  name: string;
  iconName: 'CreditCard' | 'Globe' | 'Shield' | 'Zap' | 'Wallet' | 'Building2';
  gradient: string;
  features: string[];
  description: string;
};

export const providers: PaymentProvider[] = [
  {
    name: 'Wire Transfer',
    iconName: 'Building2',
    gradient: 'from-blue-400 to-cyan-400',
    features: ['Global Network', 'Secure Transfers'],
    description: 'International bank transfers'
  },
  {
    name: 'MasterCard',
    iconName: 'CreditCard',
    gradient: 'from-rose-400 to-orange-400',
    features: ['Worldwide Acceptance', 'Instant Processing'],
    description: 'Global card payments'
  },
  {
    name: 'Visa',
    iconName: 'CreditCard',
    gradient: 'from-emerald-400 to-teal-400',
    features: ['Universal Access', 'Secure Payments'],
    description: 'Leading card network'
  },
  {
    name: 'Stripe',
    iconName: 'Shield',
    gradient: 'from-violet-400 to-purple-400',
    features: ['Smart Payments', 'Global Scale'],
    description: 'Modern payment infrastructure'
  },
  {
    name: 'ZPay',
    iconName: 'Shield',
    gradient: 'from-indigo-400 to-blue-400',
    features: ['Enhanced Security', 'Fast Processing'],
    description: 'Next-gen payments'
  },
  {
    name: '5Pay',
    iconName: 'Globe',
    gradient: 'from-amber-400 to-orange-400',
    features: ['Local Support', 'Competitive Rates'],
    description: 'Regional expertise'
  },
  {
    name: 'PayPal',
    iconName: 'Wallet',
    gradient: 'from-blue-500 to-indigo-400',
    features: ['Buyer Protection', 'Global Reach'],
    description: 'Digital wallet solutions'
  },
  {
    name: 'Wise',
    iconName: 'Globe',
    gradient: 'from-green-400 to-emerald-400',
    features: ['Low Fees', 'Multi-Currency'],
    description: 'Cross-border payments'
  }
];