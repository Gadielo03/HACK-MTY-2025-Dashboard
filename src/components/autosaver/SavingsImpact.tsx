import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';

export function SavingsImpact() {
  const data = [
    { name: 'Inversión Automática', value: 425.00, color: '#10b981' },
    { name: 'Inversiones Manuales', value: 850.00, color: '#3b82f6' },
    { name: 'Rendimientos', value: 87.50, color: '#f59e0b' }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <TrendingUp className="text-blue-600" size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Composición del Portafolio</h3>
          <p className="text-sm text-gray-500">Últimos 30 días</p>
        </div>++
      </div>

      <div className="text-center mb-4">
        <p className="text-4xl font-bold text-gray-900">${total.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Total Invertido Este Mes</p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value}`} />
        </PieChart>
      </ResponsiveContainer>

      <div className="space-y-2 mt-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-gray-900">${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
        <p className="text-xs text-green-800">
          <strong>💡 Dato interesante:</strong> Tu inversión automática generaría ${(425.00 * 12).toFixed(2)} anuales en capital invertido!
        </p>
      </div>
    </div>
  );
}
