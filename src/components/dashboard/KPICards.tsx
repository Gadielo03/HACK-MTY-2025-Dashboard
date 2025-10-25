import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { kpisData } from '../../constants/data';

export function KPICards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {kpisData.map((kpi, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-${kpi.color}-50`}>
              <kpi.icon className={`text-${kpi.color}-600`} size={24} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${
              kpi.positive ? 'text-green-600' : 'text-red-600'
            }`}>
              {kpi.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {kpi.change}
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-1">{kpi.title}</p>
          <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
        </div>
      ))}
    </div>
  );
}
