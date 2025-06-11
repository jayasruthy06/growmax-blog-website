import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "../../../../../lib/config/db";
import BlogModel from "../../../../../lib/models/BlogModel";
import mongoose from "mongoose";
import { sanitizeSlug, sanitizeText } from "../../../../../lib/sanitizeClient";
import sanitize from "mongo-sanitize";

export async function GET(request, { params }) {
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

  try {
    await ConnectDB();
    
    const { slug } = await params;
    
    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Blog slug or ID is required" },
        { status: 400 }
      );
    }

    let blog;
    
    if (mongoose.Types.ObjectId.isValid(slug)) {
      const cleanSlug = sanitizeSlug(slug);
      blog = await BlogModel.findById(cleanSlug);
    } else {
      const cleanSlug = sanitizeSlug(slug);
      blog = await BlogModel.findOne({ slug: cleanSlug });
    }
    
    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      blog
    });
  } catch (error) {
    console.error("API Error:", error); 
    return NextResponse.json(
      { success: false, message: "Failed to fetch blog", error: error.message },
      { status: 500 }
    );
  }
}