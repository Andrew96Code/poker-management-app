'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  ChartBarIcon, 
  WalletIcon, 
  DocumentTextIcon, 
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Analysis', href: '/analysis', icon: ChartBarIcon },
  { name: 'Bankroll', href: '/bankroll', icon: WalletIcon },
  { name: 'Hand History', href: '/hand-history', icon: DocumentTextIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`flex flex-col h-screen bg-gray-900 text-white transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!isCollapsed && <h1 className="text-xl font-bold">Poker Manager</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-gray-800 rounded"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="h-5 w-5" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      <nav className="flex-1 pt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 ${
                isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && (
                <span className="ml-3">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 