import { ArrowRight, TrendingUp } from 'lucide-react';

export function RoundUpExplainer() {
  const examples = [
    { purchase: 45.00, percentage: 5, invested: 2.25, range: '$0-$100' },
    { purchase: 125.50, percentage: 10, invested: 12.55, range: '$100-$200' },
    { purchase: 89.99, percentage: 8, invested: 7.20, range: '$0-$100' },
    { purchase: 250.00, percentage: 15, invested: 37.50, range: '$200+' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-green-100 rounded-lg">
          <TrendingUp className="text-green-600" size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Cómo Funciona la Inversión Automática</h3>
          <p className="text-sm text-gray-500">Cada compra que hagas ayuda a crecer tu portafolio</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-700 mb-2">
          <strong>Configura tus rangos de compra y porcentajes</strong> y automáticamente invertimos ese porcentaje de cada compra que realices.
        </p>
        <p className="text-xs text-gray-600">
          Ejemplo: Compras $125 y configuraste 10% para ese rango → Invertimos $12.55 automáticamente.
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Ejemplos de Inversiones Automáticas:</h4>
        {examples.map((ex, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">${ex.purchase.toFixed(2)}</p>
                <p className="text-xs text-gray-500">Compra</p>
              </div>
              <ArrowRight size={16} className="text-gray-400" />
              <div className="text-right">
                <p className="text-sm font-medium text-blue-600">{ex.percentage}%</p>
                <p className="text-xs text-gray-500">{ex.range}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-green-600">${ex.invested.toFixed(2)}</p>
              <p className="text-xs text-gray-500">Invertido</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
        <p className="text-xs text-purple-800">
          <strong>💡 Consejo:</strong> Tus compras diarias se convierten en inversiones automáticas. ¡Entre más gastes, más inviertes!
        </p>
      </div>
    </div>
  );
}
