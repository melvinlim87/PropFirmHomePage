import type { Provider } from './types';

export const providers: Provider[] = [
  {
    name: 'MetaTrader',
    setupFee: '$5,000',
    monthlyFee: '$2,000',
    features: {
      webTrader: true,
      propFirmCRM: false,
      riskManagement: true,
      customization: false,
      apiAccess: true,
      support: 'Limited'
    }
  },
  {
    name: 'B2BBroker',
    setupFee: '$10,000',
    monthlyFee: '$3,500',
    features: {
      webTrader: false,
      propFirmCRM: true,
      riskManagement: true,
      customization: true,
      apiAccess: true,
      support: '24/7'
    }
  },
  {
    name: 'Leverate',
    setupFee: '$7,500',
    monthlyFee: '$2,500',
    features: {
      webTrader: true,
      propFirmCRM: false,
      riskManagement: true,
      customization: false,
      apiAccess: true,
      support: 'Business Hours'
    }
  },
  {
    name: 'cTrader',
    setupFee: '$4,000',
    monthlyFee: '$1,800',
    features: {
      webTrader: true,
      propFirmCRM: false,
      riskManagement: true,
      customization: false,
      apiAccess: true,
      support: 'Limited'
    }
  },
  {
    name: 'PrismTraders',
    setupFee: '$2,500',
    monthlyFee: '$1,500',
    features: {
      webTrader: true,
      propFirmCRM: true,
      riskManagement: true,
      customization: true,
      apiAccess: true,
      support: '24/7'
    },
    highlight: true
  }
];