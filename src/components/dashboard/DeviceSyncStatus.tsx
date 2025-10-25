import { Smartphone, Globe, Shield } from 'lucide-react';
import { devicesData } from '../../constants/data';

export function DeviceSyncStatus() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Device Sync Status</h3>
        <div className="flex items-center gap-2 text-xs text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Real-time sync</span>
        </div>
      </div>
      <div className="space-y-3">
        {devicesData.map((device, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${device.status === 'active' ? 'bg-green-100' : 'bg-gray-200'}`}>
                {idx === 0 ? <Smartphone className={device.status === 'active' ? 'text-green-600' : 'text-gray-500'} size={18} /> : 
                 idx === 1 ? <Globe className={device.status === 'active' ? 'text-green-600' : 'text-gray-500'} size={18} /> :
                 <Smartphone className={device.status === 'active' ? 'text-green-600' : 'text-gray-500'} size={18} />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{device.name}</p>
                <p className="text-xs text-gray-500">{device.lastSync}</p>
              </div>
            </div>
            <div className={`px-2 py-1 rounded text-xs font-medium ${
              device.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
            }`}>
              {device.status}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex items-start gap-2">
          <Shield className="text-blue-600 mt-0.5" size={16} />
          <div>
            <p className="text-xs font-medium text-blue-900">End-to-End Encryption</p>
            <p className="text-xs text-blue-700 mt-1">All data is encrypted during sync</p>
          </div>
        </div>
      </div>
    </div>
  );
}
