import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { spendingByCategoryData } from '../../constants/data';

export function SpendingByCategory() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Spending by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={spendingByCategoryData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <YAxis dataKey="category" type="category" stroke="#9ca3af" style={{ fontSize: '12px' }} width={100} />
          <Tooltip formatter={(value) => `$${value}`} />
          <Bar dataKey="amount" radius={[0, 8, 8, 0]}>
            {spendingByCategoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
