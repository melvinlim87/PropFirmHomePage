export interface CircularMetric {
  label: string;
  sublabel: string;
  percentage: number;
  color: string;
}

export interface CircularProgressProps {
  percentage: number;
  color: string;
  label: string;
  sublabel: string;
  size?: number;
}