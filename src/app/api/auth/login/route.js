import { NextResponse } from 'next/server';
import { authenticateUser } from '../../../../../lib/auth';

// Input sanitization helper
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input
    .replace(/[<>\"']/g, '') 
    .trim()
    .slice(0, 255); 
}

export async function POST(req) {
  const allowedOrigins = [
    'http://localhost:3000',
    'https://growmaxio.netlify.app',
  ];

  const origin = req.headers.get('origin');
  if (!allowedOrigins.includes(origin)) {
    return NextResponse.json(
      { error: 'Unauthorized origin' },
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const body = await req.json(); 
    let { email, password } = body;

    email = sanitizeInput(email);
    password = sanitizeInput(password);

    const { token, user } = await authenticateUser(email, password);

    const response = NextResponse.json(
      { success: true, user },
      { status: 200 }
    );

    response.headers.set(
      'Set-Cookie',
      `auth_token=${token}; HttpOnly; Path=/; Max-Age=${5 * 60 * 1000}; SameSite=Strict`
    ); //testing set max-age to 7 days

    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 }
    );
  }
}
