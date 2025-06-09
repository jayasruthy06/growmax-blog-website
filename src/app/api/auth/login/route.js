import { NextResponse } from 'next/server';
import { ConnectDB } from "../../../../../lib/config/db";
import User from '../../../../../lib/models/Users';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await ConnectDB();

    const cookieHeader = req.headers.get('cookie') || '';
    const alreadyLoggedIn = cookieHeader.includes('auth_token=');

    if (alreadyLoggedIn) {
      return NextResponse.json({ error: 'User already logged in' }, { status: 403 });
    }

    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user || !(await user.isPasswordValid(password))) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    
    const response = NextResponse.json({ message: 'Logged in' });

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, 
      path: '/',
      sameSite: 'Strict',
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
