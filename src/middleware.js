import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    try {
      const token = request.cookies.get('auth_token')?.value;
      
      if (!token) {
        return NextResponse.rewrite(new URL('/404', request.url));
      }
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);
      return NextResponse.next();
      
    } catch (error) {
      console.error('JWT verification failed:', error);
      return NextResponse.rewrite(new URL('/404', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ]
};