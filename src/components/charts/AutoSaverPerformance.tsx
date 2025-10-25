import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { autoSaverPerformanceData } from '../../constants/data';

export function AutoSaverPerformance() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Auto-Saver Performance</h3>
          <p className="text-sm text-gray-500">Weekly round-up savings</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">$142.50</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={autoSaverPerformanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="week" stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <Tooltip formatter={(value) => `$${value}`} />
          <Line 
            type="monotone" 
            dataKey="saved" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', r: 5 }}
            name="Saved"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
