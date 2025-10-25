import {
  DollarSign,
  PiggyBank,
  CreditCard,
  Zap,
  Activity,
  CreditCard as Wallet,
  Settings,
  TrendingUp,
  TestTube,
} from 'lucide-react';
import type { KPI, Transaction, Device, SavingsGoal } from '../types';

export const kpisData: KPI[] = [
  {
    title: 'Total Balance',
    value: '$14,332.75',
    change: '+5.2%',
    positive: true,
    icon: DollarSign,
    color: 'blue',
  },
  {
    title: 'Auto-Saved (30d)',
    value: '$142.50',
    change: '+12.8%',
    positive: true,
    icon: PiggyBank,
    color: 'green',
  },
  {
    title: 'Monthly Spending',
    value: '$2,847.90',
    change: '-3.4%',
    positive: false,
    icon: CreditCard,
    color: 'purple',
  },
  {
    title: 'Round-Ups',
    value: '125',
    change: '+18.2%',
    positive: true,
    icon: Zap,
    color: 'orange',
  },
];

export const balanceChartData = [
  { date: 'Oct 1', balance: 12200, autosaver: 1650 },
  { date: 'Oct 5', balance: 12450, autosaver: 1680 },
  { date: 'Oct 8', balance: 11900, autosaver: 1710 },
  { date: 'Oct 12', balance: 13100, autosaver: 1745 },
  { date: 'Oct 15', balance: 12800, autosaver: 1772 },
  { date: 'Oct 18', balance: 13400, autosaver: 1805 },
  { date: 'Oct 22', balance: 14332, autosaver: 1847 },
];

export const accountDistributionData = [
  { name: 'Checking', value: 8420, color: '#2563eb' },
  { name: 'Savings', value: 4065, color: '#10b981' },
  { name: 'Auto-Saver', value: 1847, color: '#f59e0b' },
];

export const spendingByCategoryData = [
  { category: 'Food & Dining', amount: 845, color: '#ef4444' },
  { category: 'Shopping', amount: 623, color: '#f59e0b' },
  { category: 'Transport', amount: 412, color: '#10b981' },
  { category: 'Entertainment', amount: 298, color: '#8b5cf6' },
  { category: 'Bills', amount: 669, color: '#3b82f6' },
];

export const autoSaverPerformanceData = [
  { week: 'Week 1', saved: 28.5 },
  { week: 'Week 2', saved: 34.2 },
  { week: 'Week 3', saved: 45.1 },
  { week: 'Week 4', saved: 34.7 },
];

export const monthlyComparisonData = [
  { month: 'Jun', income: 4200, spending: 2890, saved: 125 },
  { month: 'Jul', income: 4200, spending: 3120, saved: 138 },
  { month: 'Aug', income: 4250, spending: 2780, saved: 142 },
  { month: 'Sep', income: 4200, spending: 3045, saved: 156 },
  { month: 'Oct', income: 4250, spending: 2847, saved: 142 },
];

export const transactionsData: Transaction[] = [
  {
    name: 'Starbucks Coffee',
    amount: -5.4,
    roundup: 0.6,
    time: '2 hours ago',
    category: 'food',
  },
  {
    name: 'Amazon Purchase',
    amount: -89.99,
    roundup: 0.01,
    time: '1 day ago',
    category: 'shopping',
  },
  {
    name: 'Salary Deposit',
    amount: 4250.0,
    roundup: 0,
    time: '2 days ago',
    category: 'income',
  },
  {
    name: 'Gas Station',
    amount: -45.23,
    roundup: 0.77,
    time: '3 days ago',
    category: 'transport',
  },
  {
    name: 'Netflix',
    amount: -15.99,
    roundup: 0.01,
    time: '5 days ago',
    category: 'entertainment',
  },
];

export const devicesData: Device[] = [
  { name: 'iPhone 14 Pro', lastSync: '2 minutes ago', status: 'active' },
  { name: 'Web Dashboard', lastSync: 'Just now', status: 'active' },
  { name: 'iPad Air', lastSync: '2 hours ago', status: 'idle' },
];

export const savingsGoalsData: SavingsGoal[] = [
  { name: 'Emergency Fund', current: 1847, target: 5000, color: '#10b981' },
  { name: 'Vacation', current: 890, target: 3000, color: '#f59e0b' },
  { name: 'New Car', current: 2340, target: 15000, color: '#3b82f6' },
];

export const menuItems = [
  { id: 'dashboard', icon: Activity, label: 'Dashboard' },
  { id: 'accounts', icon: Wallet, label: 'Accounts' },
  { id: 'autosaver', icon: PiggyBank, label: 'Auto-Saver' },
  { id: 'cards', icon: CreditCard, label: 'Cards' },
  { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
  { id: 'test', icon: TestTube, label: 'Test API' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];
