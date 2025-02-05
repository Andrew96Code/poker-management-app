import { AuthProvider } from './context/AuthContext';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export const metadata = {
  title: 'Poker Management App',
  description: 'A comprehensive poker management and analysis tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100 dark:bg-gray-900">
      <body className="h-full">
        <AuthProvider>
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-auto p-8">
              <div className="mx-auto max-w-7xl">
                {children}
              </div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
} 