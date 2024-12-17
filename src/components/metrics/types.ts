import { LucideIcon } from 'lucide-react';

export interface MetricItem {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
  percentage: number;
}

export interface CircularMetricItem {
  title: string;
  value: string;
  percentage: number;
  color: string;
}

export interface MetricsProps {
  title: string;
  subtitle: string;
  metrics: MetricItem[];
}

export interface CircularMetricsProps {
  title: string;
  subtitle: string;
  metrics: CircularMetricItem[];
}