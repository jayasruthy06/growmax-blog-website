import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "../../../../lib/config/db";
import BlogModel from "../../../../lib/models/BlogModel";
import ImageKit from "imagekit";
import { sanitizeText, sanitizeHTMLBackend, sanitizeSlug } from "../../../../lib/sanitizeClient";
import sanitize from "mongo-sanitize";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

function createSafeFilename(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '') 
    .replace(/\s+/g, '_') 
    .replace(/_{2,}/g, '_'); 
}


async function uploadBlogCoverImage(file, slug) {
  try {
    if (!process.env.IMAGEKIT_PUBLIC_KEY || 
        !process.env.IMAGEKIT_PRIVATE_KEY || 
        !process.env.IMAGEKIT_URL_ENDPOINT) {
      throw new Error("ImageKit environment variables are not configured");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const safeSlug = createSafeFilename(slug);
    const extension = file.type.split('/')[1]; 
    const fileName = `${safeSlug}.${extension}`;

    const result = await imagekit.upload({
      file: buffer,
      fileName: fileName,
      folder: "blog-cover",
      useUniqueFileName: false,
      overwriteFile: true
    });

    return result.url;
  } catch (error) {
    throw new Error("Failed to upload blog cover image: " + error.message);
  }
}

async function deleteCoverImage(imageUrl) {
  try {
    const urlObj = new URL(imageUrl);
    const pathnameParts = urlObj.pathname.split('/');
    const folderIndex = pathnameParts.findIndex(p => p === 'blog-cover');
    
    if (folderIndex === -1) {
      return;
    }

    const folderName = pathnameParts[folderIndex]; 
    const fileName = pathnameParts.slice(folderIndex + 1).join('/'); 

    const cleanFileName = fileName.split('?')[0];

    const files = await imagekit.listFiles({ path: folderName });
    const matchedFile = files.find(f => f.name === cleanFileName);

    if (!matchedFile) {
      return;
    }

    await imagekit.deleteFile(matchedFile.fileId);
   
  } catch (error) {
    console.error("❌ Error deleting image from ImageKit:", error.message);
  }
}

export async function POST(request) {
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
    const formData = await request.formData();
    const title = sanitizeText(formData.get("title"));
    const description = sanitizeText(formData.get("description"));
    const authorname = sanitizeText(formData.get("authorname"));
    const category = sanitizeText(formData.get("category"));
    const content = sanitizeHTMLBackend(formData.get("content"));
    const slug = sanitizeSlug(formData.get("slug"));
    const date = formData.get("date");
    const coverImage = formData.get("coverimg"); 
    const authorimg = formData.get("authorimg");
   
    if (!title || !description || !authorname || !category || !content || !slug) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!coverImage) {
      return NextResponse.json(
        { success: false, message: "Cover image is required" },
        { status: 400 }
      );
    }

    if (!(coverImage instanceof File)) {
      return NextResponse.json(
        { success: false, message: "Invalid cover image format" },
        { status: 400 }
      );
    }

    if (coverImage.size === 0) {
      return NextResponse.json(
        { success: false, message: "Cover image file is empty" },
        { status: 400 }
      );
    }

    
    if (!coverImage.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, message: "Cover image must be an image file" },
        { status: 400 }
      );
    }

   console.log("Waiting to upload image")
    const coverimg = await uploadBlogCoverImage(coverImage, slug);
    console.log("Uploaded img")
    const blogData = {
      title,
      description,
      coverimg, 
      authorname,
      category,
      content,
      slug,
      date: date ? new Date(date) : new Date()
    };

    if (authorimg) {
      blogData.authorimg = authorimg;
    }

    console.log("waiting to save blog")
    const blog = new BlogModel(blogData);
    await blog.save();
    console.log("saved blog")
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Blog created successfully",
        blog: {
          ...blog.toObject(),
          coverimg: "Image stored successfully"
        }
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to create blog",
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const allowedOrigins = [
    'http://localhost:3000',
    'https://growmaxio.netlify.app',
  ];

  const origin = request.headers.origin;

  if (origin && !allowedOrigins.includes(origin)) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized origin' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }
  await ConnectDB();
  try {

    const {searchParams} = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 4;
    const category = searchParams.get("category");
    
    const filter ={};
    if(category && category!== "NULL"){
      filter.category = category;
    }
    const skip = (page-1) * limit;
    const total = await BlogModel.countDocuments(filter);
    const blogs = await BlogModel.find(filter).sort({ date: -1 }).skip(skip).limit(limit).select("-content");
    return NextResponse.json({
      success: true,
      blogs, 
      totalPages: Math.ceil(total/limit),
      currentPage: page
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
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
    const formData = await request.formData();
    
    
    const id = formData.get("id");
    const title = sanitizeText(formData.get("title"));
    const description = sanitizeText(formData.get("description"));
    const authorname = sanitizeText(formData.get("authorname"));
    const category = sanitizeText(formData.get("category"));
    const content = sanitizeHTMLBackend(formData.get("content"));
    const slug = sanitizeSlug(formData.get("slug"));
    const date = formData.get("date");
    const coverImage = formData.get("coverimg"); 
    const authorimg = formData.get("authorimg");
    
    if (!id || !title || !description || !authorname || !category || !content || !slug) {
      return NextResponse.json(
        { success: false, message: "All fields including ID are required" },
        { status: 400 }
      );
    }
    const cleanId = sanitize(id).trim();
    const existingBlog = await BlogModel.findById(cleanId);
    if (!existingBlog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    let coverimg = existingBlog.coverimg;

    if (coverImage && coverImage instanceof File && coverImage.size > 0) {
  
        if (coverimg) {
          await deleteCoverImage(coverimg);
        }
      coverimg = await uploadBlogCoverImage(coverImage, slug);
    }

    const slugChanged = slug !== existingBlog.slug;

if (slugChanged && (!coverImage || coverImage.size === 0)) {
  
  const oldImageUrl = existingBlog.coverimg;

  const response = await fetch(oldImageUrl);
  const buffer = Buffer.from(await response.arrayBuffer());

  const safeSlug = createSafeFilename(slug);
  const extension = oldImageUrl.split('.').pop().split('?')[0]; 
  const fileName = `${safeSlug}.${extension}`;

  const result = await imagekit.upload({
    file: buffer,
    fileName,
    folder: "blog-cover",
    useUniqueFileName: false,
    overwriteFile: true
  });

  
  await deleteCoverImage(oldImageUrl);

  coverimg = result.url;
}

    const updateData = {
      title,
      description,
      coverimg,
      authorname,
      category,
      content,
      slug,
      date: date ? new Date(date) : new Date(),
      updatedAt: new Date()
    };

    if (authorimg) {
      updateData.authorimg = authorimg;
    }

    const updatedBlog = await BlogModel.findByIdAndUpdate(id, updateData, { new: true });
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Blog updated successfully",
        blog: {
          ...updatedBlog.toObject(),
          coverimg: coverimg ? "Image updated successfully" : "No image provided"
        }
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to update blog",
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
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
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Blog ID is required" },
        { status: 400 }
      );
    }
    const cleanId = sanitize(id).trim();
    const existingBlog = await BlogModel.findById(cleanId);
    if (!existingBlog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    const coverimage = existingBlog.coverimg
    await BlogModel.findByIdAndDelete(cleanId);

    if (coverimage) {
      await deleteCoverImage(coverimage);
    }
    return NextResponse.json(
      { 
        success: true, 
        message: "Blog deleted successfully"
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to delete blog",
        error: error.message 
      },
      { status: 500 }
    );
  }
}