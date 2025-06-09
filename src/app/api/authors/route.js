import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "../../../../lib/config/db";
import Users from "../../../../lib/models/Users";

export async function GET() {
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