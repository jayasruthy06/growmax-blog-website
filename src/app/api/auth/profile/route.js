// app/api/user/profile/route.js
import { NextResponse } from 'next/server';
import { verifyToken, isSessionActive } from '../../../../../lib/jwt';
import { ConnectDB } from '../../../../../lib/config/db';
import User from "../../../../../lib/models/Users";

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

  try {
    await ConnectDB();
  } catch (dbError) {
    console.error('Database connection error', dbError);
    return NextResponse.json({ success: false, message: 'Database connection failed' }, { status: 500 });
  }

  try {
    const token = req.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: 'No token provided' }, { status: 401 });
    }

    const decodedToken = await verifyToken(token);
    if (!decodedToken) {
      return NextResponse.json({ success: false, message: 'Invalid or expired token' }, { status: 401 });
    }

    const [isActive, userInfo] = await Promise.all([
      isSessionActive(decodedToken.userId, decodedToken.sessionId),
      User.findOne({ email: decodedToken.email }).select('name email mobileno role profilephoto createdAt').lean()
    ]);

    if (!isActive) {
      return NextResponse.json({ success: false, message: 'Session expired or logged in elsewhere' }, { status: 401 });
    }

    if (!userInfo) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: decodedToken.userId,
        email: decodedToken.email,
        name: decodedToken.name,
        role: decodedToken.role
      },
      userInfo: {
        _id: userInfo._id,
        name: userInfo.name,
        email: userInfo.email,
        mobileno: userInfo.mobileno,
        role: userInfo.role,
        profilephoto: userInfo.profilephoto,
        createdAt: userInfo.createdAt
      }
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'private, max-age=30', 
      }
    });

  } catch (error) {
    console.error('Error in /api/user/profile GET route:', error);
    return NextResponse.json({ success: false, message: error.message || 'Internal server error' }, { status: 500 });
  }
}