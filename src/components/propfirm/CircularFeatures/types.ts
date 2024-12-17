import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export interface Point {
  x: number;
  y: number;
}