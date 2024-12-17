import { LucideIcon } from 'lucide-react';

export interface Metric {
  label: string;
  value: string;
  trend?: number;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics: Metric[];
  gradient: string;
}