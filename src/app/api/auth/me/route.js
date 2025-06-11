// app/api/user/route.js
import { NextResponse } from 'next/server';
import { verifyToken, isSessionActive } from '../../../../../lib/jwt';
import { ConnectDB } from '../../../../../lib/config/db';

export async function GET(req) {
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

  // --- CRUCIAL: Connect to the database here ---
  try {
    await ConnectDB();
  } catch (dbError) {
    console.error('Database connection error in /api/user:', dbError);
    return NextResponse.json({ success: false, message: 'Database connection failed' }, { status: 500 });
  }
  // --- END CRUCIAL ---

  try {
    const token = req.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: 'No token provided' }, { status: 401 }); // 401 Unauthorized
    }

    // 1. Verify the JWT token (does NOT hit the DB)
    const decodedToken = await verifyToken(token); // Renamed to avoid confusion with `decoded` from `validateTokenWithSession`

    if (!decodedToken) {
      return NextResponse.json({ success: false, message: 'Invalid or expired token' }, { status: 401 });
    }

    // 2. Check session activity in the database (THIS HITS THE DB)
    const isActive = await isSessionActive(decodedToken.userId, decodedToken.sessionId);

    if (!isActive) {
      return NextResponse.json({ success: false, message: 'Session expired or logged in elsewhere' }, { status: 401 });
    }

    // If both token is valid and session is active
    return NextResponse.json({
      success: true,
      user: {
        id: decodedToken.userId, // Use userId from the token
        email: decodedToken.email,
        name: decodedToken.name,
        role: decodedToken.role
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Error in /api/user GET route:', error);
    return NextResponse.json({ success: false, message: error.message || 'Internal server error' }, { status: 500 });
  }
}