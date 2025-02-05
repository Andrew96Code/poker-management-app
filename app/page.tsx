'use client';

import Card from '@/components/ui/Card';

// Temporary mock data
const recentSessions = [
  { id: 1, date: '2024-02-05', gameType: 'NL Hold\'em $1/$2', profit: 245.50 },
  { id: 2, date: '2024-02-04', gameType: 'PLO $2/$5', profit: -120.75 },
  { id: 3, date: '2024-02-03', gameType: 'NL Hold\'em $2/$5', profit: 567.25 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bankroll Card */}
        <Card title="Bankroll">
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              ${(10567.50).toLocaleString()}
            </div>
            <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Bankroll chart coming soon</p>
            </div>
          </div>
        </Card>

        {/* Win Rate Card */}
        <Card title="Win Rate">
          <div className="space-y-4">
            <div className="text-3xl font-bold text-green-600">
              5.7 BB/100
            </div>
            <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Win rate chart coming soon</p>
            </div>
          </div>
        </Card>

        {/* Recent Sessions Card */}
        <Card title="Recent Sessions">
          <div className="space-y-4">
            {recentSessions.map((session) => (
              <div
                key={session.id}
                className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {session.gameType}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {session.date}
                  </p>
                </div>
                <span
                  className={`font-semibold ${
                    session.profit >= 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  ${session.profit.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
} 