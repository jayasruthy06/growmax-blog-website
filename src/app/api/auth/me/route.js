import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req) {
  try {
    const cookieHeader = req.headers.get('cookie') || '';
    const authToken = cookieHeader
      .split('; ')
      .find(row => row.startsWith('auth_token='))
      ?.split('=')[1];

    if (!authToken) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    
    return NextResponse.json({ 
      userId: decoded.userId, 
      email: decoded.email 
    });
    
  } catch (err) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}