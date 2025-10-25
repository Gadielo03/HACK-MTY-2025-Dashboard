import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar } from 'lucide-react';

export function SavingsProjection() {
  const data = [
    { month: 'Jan', actual: 0, projected: 0 },
    { month: 'Feb', actual: 425, projected: 425 },
    { month: 'Mar', actual: 850, projected: 850 },
    { month: 'Apr', actual: 1275, projected: 1275 },
    { month: 'May', actual: 1700, projected: 1700 },
    { month: 'Jun', actual: 2125, projected: 2125 },
    { month: 'Jul', actual: 0, projected: 2550 },
    { month: 'Aug', actual: 0, projected: 2975 },
    { month: 'Sep', actual: 0, projected: 3400 },
    { month: 'Oct', actual: 0, projected: 3825 },
    { month: 'Nov', actual: 0, projected: 4250 },
    { month: 'Dec', actual: 0, projected: 5100 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Calendar className="text-purple-600" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Proyección a 12 Meses</h3>
            <p className="text-sm text-gray-500">Basado en inversión automática actual</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-purple-600">$5,100</p>
          <p className="text-xs text-gray-500">Proyección Dic</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <Tooltip 
            formatter={(value) => `$${value}`}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Area 
            type="monotone" 
            dataKey="actual" 
            stroke="#10b981" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorActual)" 
            name="Capital Invertido"
          />
          <Area 
            type="monotone" 
            dataKey="projected" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            strokeDasharray="5 5"
            fillOpacity={1} 
            fill="url(#colorProjected)" 
            name="Proyección"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-3 bg-green-50 rounded-lg">
          <p className="text-xs text-gray-600">Balance Actual</p>
          <p className="text-xl font-bold text-green-600">$2,125</p>
        </div>
        <div className="p-3 bg-purple-50 rounded-lg">
          <p className="text-xs text-gray-600">Promedio Mensual</p>
          <p className="text-xl font-bold text-purple-600">$425</p>
        </div>
      </div>
    </div>
  );
}
