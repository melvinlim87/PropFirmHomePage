export interface ProviderFeatures {
  webTrader: boolean;
  propFirmCRM: boolean;
  riskManagement: boolean;
  customization: boolean;
  apiAccess: boolean;
  support: '24/7' | 'Business Hours' | 'Limited';
}

export interface Provider {
  name: string;
  setupFee: string;
  monthlyFee: string;
  features: ProviderFeatures;
  highlight?: boolean;
}