import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlyComparisonData } from '../../constants/data';

export function MonthlyComparison() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Monthly Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyComparisonData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#10b981" radius={[8, 8, 0, 0]} name="Income" />
          <Bar dataKey="spending" fill="#ef4444" radius={[8, 8, 0, 0]} name="Spending" />
          <Bar dataKey="saved" fill="#f59e0b" radius={[8, 8, 0, 0]} name="Auto-Saved" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
