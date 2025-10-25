import { savingsGoalsData } from '../../constants/data';

export function SavingsGoals() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Savings Goals</h3>
      <div className="space-y-4">
        {savingsGoalsData.map((goal, idx) => {
          const progress = (goal.current / goal.target) * 100;
          return (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{goal.name}</span>
                <span className="text-sm font-bold text-gray-900">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <div className="bg-gray-100 rounded-full h-3">
                <div 
                  className="h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, backgroundColor: goal.color }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{progress.toFixed(1)}% complete</p>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
        Add New Goal
      </button>
    </div>
  );
}
