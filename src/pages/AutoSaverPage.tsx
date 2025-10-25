import { RoundUpExplainer } from '../components/autosaver/RoundUpExplainer';
import { SavingsImpact } from '../components/autosaver/SavingsImpact';
import { SavingsProjection } from '../components/autosaver/SavingsProjection';
import { TransactionBreakdown } from '../components/autosaver/TransactionBreakdown';
import { AutoSaverPerformance } from '../components/charts/AutoSaverPerformance';
import { TrendingUp, ShoppingCart, Percent } from 'lucide-react';

export function AutoSaverPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-green-100 rounded-lg">
            <TrendingUp className="text-green-600" size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Inversión Automática</h1>
            <p className="text-gray-600">Cada compra que hagas impulsa tu portafolio de inversiones</p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={28} />
            <h3 className="text-lg font-semibold">Portafolio Total</h3>
          </div>
          <p className="text-4xl font-bold mb-2">$5,247.50</p>
          <p className="text-green-100 text-sm">Balance de inversiones</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Percent size={28} />
            <h3 className="text-lg font-semibold">Este Mes</h3>
          </div>
          <p className="text-4xl font-bold mb-2">$425.00</p>
          <p className="text-blue-100 text-sm">+18.5% vs mes anterior</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart size={28} />
            <h3 className="text-lg font-semibold">Compras Procesadas</h3>
          </div>
          <p className="text-4xl font-bold mb-2">105</p>
          <p className="text-purple-100 text-sm">Inversiones automáticas</p>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <RoundUpExplainer />
        </div>
        <div>
          <SavingsImpact />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <SavingsProjection />
        <AutoSaverPerformance />
      </div>

      {/* Transaction Breakdown */}
      <div className="mb-6">
        <TransactionBreakdown />
      </div>

      {/* Tips Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Maximiza tus Inversiones</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Configura porcentajes más altos para compras mayores</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Usa tu tarjeta para compras diarias y deja que trabaje por ti</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Revisa tu configuración mensualmente para optimizar resultados</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Las compras pequeñas frecuentes también suman - ¡no las subestimes!</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3">📊 Tu Progreso</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700">Meta Semestral ($3,000)</span>
                <span className="text-sm font-bold text-gray-900">71%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '71%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700">Meta Anual ($6,000)</span>
                <span className="text-sm font-bold text-gray-900">87%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Estás en camino de invertir <strong>$5,100</strong> este año de forma automática. 
              Con los rendimientos proyectados, podrías alcanzar <strong>$5,500+</strong>!
            </p>
          </div>
        </div>
      </div>

      {/* Configuration Preview */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">📱 Configuración Actual</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Editar en App
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
            <p className="text-xs text-gray-600 mb-1">Compras Pequeñas</p>
            <p className="text-lg font-bold text-gray-900">$0 - $100</p>
            <p className="text-2xl font-bold text-green-600 mt-2">3-5%</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <p className="text-xs text-gray-600 mb-1">Compras Medianas</p>
            <p className="text-lg font-bold text-gray-900">$100 - $250</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">8-10%</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
            <p className="text-xs text-gray-600 mb-1">Compras Grandes</p>
            <p className="text-lg font-bold text-gray-900">$250+</p>
            <p className="text-2xl font-bold text-purple-600 mt-2">12-15%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
