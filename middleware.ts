import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');

  // If the user is not logged in and trying to access a protected route,
  // redirect them to the login page
  if (!session && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/hand-history',
    '/analysis',
    '/bankroll',
    '/settings',
    // Add other protected routes here
  ],
}; 