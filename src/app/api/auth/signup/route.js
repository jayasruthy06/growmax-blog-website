import { NextResponse } from 'next/server';
import { ConnectDB } from "../../../../../lib/config/db"
import User from '../../../../../lib/models/Users';

export async function POST(req) {
  try {
    await ConnectDB();
    const { email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const user = new User({ email, passwordHash: password });
    await user.save();

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}