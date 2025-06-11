import { NextResponse } from 'next/server';
import { verifyToken, generateToken, getTokenExpiry, isSessionActive } from '../../../../../lib/jwt';

export async function POST(req) {
  try {
    const token = req.cookies?.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json({
        success: false,
        message: 'No token provided'
      }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({
        success: false,
        message: 'Invalid token'
      }, { status: 401 });
    }

    const active = await isSessionActive(decoded.userId, decoded.sessionId);
    if(!active){
      return NextResponse.json({
        success: false, message: 'Session expired'
      }), {status: 401};
    }

    const absoluteExpiryMs = 7 * 24 * 60 * 60 * 1000; // alter token expiry date here
    const tokenAge = Date.now() - decoded.issuedAt;

    if (tokenAge > absoluteExpiryMs) {
      await removeSession(decoded.userId);

      const response = NextResponse.json({
        success: false,
        message: 'Session expired. Please log in again.'
      }, { status: 401 });

      response.headers.set(
        'Set-Cookie',
        `auth_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`
      );

      return response;
    }

    const tokenExpiry = getTokenExpiry(token); 
    const now = Date.now();
    const timeUntilExpiry = tokenExpiry - now;
    const tenMinutes = 10 * 60 * 1000;

    if (timeUntilExpiry > tenMinutes) {
      return NextResponse.json({
        success: true,
        needsRefresh: false
      });
    }

    const newToken = generateToken({
      userId: decoded.userId,
      email: decoded.email,
      name: decoded.name,
      role: decoded.role,
      sessionId: decoded.sessionId,
      issuedAt: decoded.issuedAt
    });

    const response = NextResponse.json({
      success: true,
      needsRefresh: true
    });

    response.headers.set(
      'Set-Cookie',
      `token=${newToken}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60 * 1000}; SameSite=Strict`
    ); //alter token max age 

    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, { status: 500 });
  }
}
