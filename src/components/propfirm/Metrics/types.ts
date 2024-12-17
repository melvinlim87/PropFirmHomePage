import { LucideIcon } from 'lucide-react';

export interface Metric {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
  percentage: number;
}