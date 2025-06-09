import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Logged out' }, {
    status: 200,
    headers: {
      'Set-Cookie': `auth_token=deleted; HttpOnly; Path=/; Max-Age=0; SameSite=Strict; Secure=${process.env.NODE_ENV === 'production'}`
    }
  });
}
