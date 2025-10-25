import { Smartphone } from 'lucide-react';
import { menuItems } from '../../constants/data';
import logoCapital from '../../assets/logoCapital.png';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-blue-900 text-white p-6">
      <div className="mb-10">
        <div className="bg-white p-3 rounded-lg mb-3 flex justify-center">
          <img src={logoCapital} alt="Capital One" className="w-40" />
        </div>
        <p className="text-white text-sm font-medium">Business Dashboard</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              currentPage === item.id 
                ? 'bg-blue-700 text-white' 
                : 'text-blue-200 hover:bg-blue-800'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-blue-800 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">JS</span>
            </div>
            <div>
              <p className="font-medium text-sm">John Smith</p>
              <p className="text-blue-300 text-xs">Premium Account</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-300">
            <Smartphone size={14} />
            <span>Synced 2 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
