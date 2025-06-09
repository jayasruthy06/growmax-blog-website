import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "../../../../../lib/config/db";
import BlogModel from "../../../../../lib/models/BlogModel";
import mongoose from "mongoose";

export async function GET(request, { params }) {
  await ConnectDB();
  try {
    const { slug } = params;
    
    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Blog slug or ID is required" },
        { status: 400 }
      );
    }

    let blog;
    
    if (mongoose.Types.ObjectId.isValid(slug)) {
      blog = await BlogModel.findById(slug);
    } else {
      blog = await BlogModel.findOne({ slug: slug });
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
    return NextResponse.json(
      { success: false, message: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}