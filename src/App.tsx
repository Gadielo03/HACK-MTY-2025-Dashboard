import { useState } from 'react';
import { Download } from 'lucide-react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { KPICards } from './components/dashboard/KPICards';
import { RecentTransactions } from './components/dashboard/RecentTransactions';
import { DeviceSyncStatus } from './components/dashboard/DeviceSyncStatus';
import { SavingsGoals } from './components/dashboard/SavingsGoals';
import { BalanceChart } from './components/charts/BalanceChart';
import { AccountDistribution } from './components/charts/AccountDistribution';
import { SpendingByCategory } from './components/charts/SpendingByCategory';
import { AutoSaverPerformance } from './components/charts/AutoSaverPerformance';
import { MonthlyComparison } from './components/charts/MonthlyComparison';
import { AutoSaverPage } from './pages/AutoSaverPage';

export default function CapitalOneDashboard() {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedAccount, setSelectedAccount] = useState('all');
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="ml-64">
        <Header />
        {currentPage === 'autosaver' ? (
          <AutoSaverPage />
        ) : (
          <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Dashboard</h1>
            <p className="text-gray-600">Real-time insights synchronized with your mobile app</p>
          </div>

          <div className="flex gap-4 mb-8">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium"
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>
            
            <select 
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium"
            >
              <option value="all">All Accounts</option>
              <option value="checking">360 Checking</option>
              <option value="savings">360 Savings</option>
              <option value="autosaver">Auto-Saver</option>
            </select>

            <button className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
              <Download size={18} />
              Export Report
            </button>
          </div>

          <KPICards />
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2">
              <BalanceChart />
            </div>
            <div>
              <AccountDistribution />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <SpendingByCategory />
            <AutoSaverPerformance />
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <RecentTransactions />
            <div className="col-span-2">
              <MonthlyComparison />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <DeviceSyncStatus />
            <SavingsGoals />
          </div>
        </main>
        )}
      </div>
    </div>
  );
}
