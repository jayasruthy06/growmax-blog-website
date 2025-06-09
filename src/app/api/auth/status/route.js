import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req) {
  try {
    const cookieHeader = req.headers.get('cookie') || '';
    const authTokenMatch = cookieHeader.match(/auth_token=([^;]*)/);
    const token = authTokenMatch ? authTokenMatch[1] : null;

    if (!token) {
      return NextResponse.json({ isAuthenticated: false });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    return NextResponse.json({ 
      isAuthenticated: true, 
      user: { 
        id: decoded.userId, 
        email: decoded.email 
      }
    });
  } catch (error) {
    return NextResponse.json({ isAuthenticated: false });
  }
}