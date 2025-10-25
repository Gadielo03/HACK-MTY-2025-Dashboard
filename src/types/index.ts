export interface KPI {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

export interface Transaction {
  name: string;
  amount: number;
  roundup: number;
  time: string;
  category: string;
}

export interface Device {
  name: string;
  lastSync: string;
  status: 'active' | 'idle';
}

export interface SavingsGoal {
  name: string;
  current: number;
  target: number;
  color: string;
}

export interface MenuItem {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}

export interface ChartData {
  [key: string]: string | number;
}
