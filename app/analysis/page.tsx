'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import StatCard from '@/components/stats/StatCard';
import PositionStats from '@/components/stats/PositionStats';
import Button from '@/components/ui/Button';

// Mock data for demonstration
const mockPositionStats = [
  { position: 'BTN', vpip: 32.5, pfr: 28.3, threeBet: 8.2, hands: 1250 },
  { position: 'CO', vpip: 28.7, pfr: 24.1, threeBet: 7.5, hands: 1180 },
  { position: 'MP', vpip: 23.4, pfr: 19.8, threeBet: 6.8, hands: 1320 },
  { position: 'EP', vpip: 18.2, pfr: 15.5, threeBet: 5.4, hands: 1150 },
  { position: 'BB', vpip: 35.1, pfr: 12.3, threeBet: 9.1, hands: 1420 },
  { position: 'SB', vpip: 29.8, pfr: 21.4, threeBet: 11.2, hands: 1380 },
];

const timeRanges = [
  { label: 'Last Week', value: 'week' },
  { label: 'Last Month', value: 'month' },
  { label: 'Last 3 Months', value: 'quarter' },
  { label: 'Last Year', value: 'year' },
  { label: 'All Time', value: 'all' },
];

export default function Analysis() {
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Performance Analysis
        </h1>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              variant={timeRange === range.value ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setTimeRange(range.value)}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Hands"
          value="7,700"
          trend={12}
          description="12% increase from previous period"
        />
        <StatCard
          label="Win Rate"
          value="5.2 BB/100"
          trend={8}
          description="8% increase from previous period"
        />
        <StatCard
          label="VPIP"
          value="24.5%"
          trend={-2}
          description="2% decrease from previous period"
        />
        <StatCard
          label="PFR"
          value="19.8%"
          trend={5}
          description="5% increase from previous period"
        />
      </div>

      {/* Position-based Stats */}
      <Card title="Position-based Statistics">
        <PositionStats stats={mockPositionStats} />
      </Card>

      {/* Placeholder for future charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Win Rate by Position">
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Win rate chart coming soon</p>
          </div>
        </Card>
        <Card title="Hand Distribution">
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Hand distribution chart coming soon</p>
          </div>
        </Card>
      </div>
    </div>
  );
} 