import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ShoppingCart } from 'lucide-react';

export function TransactionBreakdown() {
  const data = [
    { range: '$0-$50', compras: 45, percentage: 3, invested: 42.75 },
    { range: '$50-$100', compras: 28, percentage: 5, invested: 98.00 },
    { range: '$100-$150', compras: 15, percentage: 8, invested: 144.00 },
    { range: '$150-$200', compras: 8, percentage: 10, invested: 140.00 },
    { range: '$200-$300', compras: 6, percentage: 12, invested: 180.00 },
    { range: '$300+', compras: 3, percentage: 15, invested: 165.00 }
  ];

  const totalCompras = data.reduce((sum, item) => sum + item.compras, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-orange-100 rounded-lg">
            <ShoppingCart className="text-orange-600" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Desglose por Rango de Compra</h3>
            <p className="text-sm text-gray-500">Inversión automática por monto de compra</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-orange-600">{totalCompras}</p>
          <p className="text-xs text-gray-500">Compras Totales</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="range" stroke="#9ca3af" style={{ fontSize: '11px' }} angle={-45} textAnchor="end" height={80} />
          <YAxis yAxisId="left" stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="compras" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Cantidad de Compras" />
          <Bar yAxisId="right" dataKey="invested" fill="#10b981" radius={[8, 8, 0, 0]} name="Invertido ($)" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-800">
          <strong>💡 Análisis:</strong> Tus compras pequeñas ($0-$50) son las más frecuentes. Aunque el porcentaje es bajo, la frecuencia genera un buen retorno de inversión.
        </p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {data.slice(0, 3).map((item, idx) => (
          <div key={idx} className="p-2 bg-gray-50 rounded text-center">
            <p className="text-xs text-gray-600">{item.range}</p>
            <p className="text-lg font-bold text-blue-600">{item.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
