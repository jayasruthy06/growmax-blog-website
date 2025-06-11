import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "../../../../lib/config/db";
import Users from "../../../../lib/models/Users";

export async function GET(request) {
  const allowedOrigins = [
    'http://localhost:3000',
    'https://growmaxio.netlify.app',
  ];

  const origin = request.headers.get('origin');

  if (origin && !allowedOrigins.includes(origin)) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized origin' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }
  await ConnectDB();
  try {
    const authors = await Users.find({});
    return NextResponse.json({
      success: true,
      authors
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch authors" },
      { status: 500 }
    );
  }
}