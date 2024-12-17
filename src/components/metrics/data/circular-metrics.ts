import { colors } from '../utils/colors';
import type { CircularMetric } from '../types/circular-metrics';

export const circularMetrics: CircularMetric[] = [
  {
    label: 'Risk Compliance',
    sublabel: 'High Precision',
    percentage: 99.9,
    color: colors.blue
  },
  {
    label: 'Trader Retention',
    sublabel: 'Industry Leading',
    percentage: 85,
    color: colors.purple
  },
  {
    label: 'Processing Time',
    sublabel: 'Ultra Fast',
    percentage: 65,
    color: colors.emerald
  },
  {
    label: 'Time Saved',
    sublabel: 'Efficient',
    percentage: 40,
    color: colors.orange
  },
  {
    label: 'Productivity',
    sublabel: 'Enhanced',
    percentage: 75,
    color: colors.red
  },
  {
    label: 'System Uptime',
    sublabel: 'Always On',
    percentage: 100,
    color: colors.indigo
  }
];