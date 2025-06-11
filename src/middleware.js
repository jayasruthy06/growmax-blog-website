import { NextResponse } from 'next/server';

const ADMIN_DASHBOARD_BASE = '/verified/dashboard/admin';
const editorAllowedRoutes = [
  '/verified/dashboard',
  '/verified/dashboard/all'
];

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'https://growmaxio.netlify.app'
];

function setCorsHeaders(request, response) {
  const origin = request.headers.get('origin');
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Vary', 'Origin');
  }
}

export async function validateTokenWithSessionAPI(token, requestURL) {
  try {
    const url = new URL('/api/auth/validateuser', requestURL);
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
      credentials: 'omit'
    });

    if (!response.ok) {
      return { valid: false, reason: 'Validation API error' };
    }

    const data = await response.json();
    return data;
  } catch {
    return { valid: false, reason: 'Validation failed' };
  }
}

export async function middleware(request) {
  const { pathname, method } = request.nextUrl;

  if (method === 'OPTIONS') {
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    setCorsHeaders(request, response);
    return response;
  }

  if (pathname.startsWith('/verified/dashboard')) {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const result = await validateTokenWithSessionAPI(token, request.url);

    if (!result.valid) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const decoded = result.user;
    const role = decoded.role;

    const headers = new Headers(request.headers);
    headers.set('x-user-id', decoded.userId);
    headers.set('x-user-email', decoded.email);
    headers.set('x-user-role', role);

    const normalizedPath = pathname.endsWith('/') && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname;

    if (normalizedPath.startsWith('/verified/dashboard/admin')) {
      if (role !== 'admin') {
        return NextResponse.rewrite(new URL('/403', request.url));
      }
    }

    if (normalizedPath.startsWith('/verified/dashboard')) {
      if (role === 'admin' || role === 'editor') {
        const response = NextResponse.next({ request: { headers } });
        setCorsHeaders(request, response);
        return response;
      }
      return NextResponse.rewrite(new URL('/403', request.url));
    }
  }

  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  setCorsHeaders(request, response);

  return response;
}


export const config = {
  matcher: [
    '/verified/:path*',
    '/api/:path*'
  ]
};
