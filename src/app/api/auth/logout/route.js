import { NextResponse } from 'next/server';
import { removeSession, verifyToken } from '../../../../../lib/jwt';

export async function POST(req) {
  try {
    const allowedOrigins = [
    'http://localhost:3000',
    'https://growmaxio.netlify.app',
  ];

  const origin = req.headers.get('origin');

  if (origin && !allowedOrigins.includes(origin)) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized origin' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

    const token = req.cookies.get('auth_token');
    if(token){
      const dec = verifyToken(token);
      if(dec){
        await removeSession(dec.userId);
      }
    }

    const response = NextResponse.json({
      success: true, message: 'Logged out successfully'
    });

   response.headers.set(
      'Set-Cookie',
      `auth_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`
    );

    return response;

  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
