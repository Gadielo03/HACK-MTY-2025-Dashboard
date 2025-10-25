import { transactionsData } from '../../constants/data';

export function RecentTransactions() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Transactions</h3>
      <div className="space-y-3">
        {transactionsData.map((tx, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div>
              <p className="text-sm font-medium text-gray-900">{tx.name}</p>
              <p className="text-xs text-gray-500">{tx.time}</p>
            </div>
            <div className="text-right">
              <p className={`text-sm font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
              </p>
              {tx.roundup > 0 && (
                <p className="text-xs text-green-600">+${tx.roundup.toFixed(2)} saved</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
