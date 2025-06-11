import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "../../../../lib/config/db";
import User from "../../../../lib/models/Users";
import ImageKit from "imagekit";
import bcrypt from "bcryptjs";
import { sanitizeText } from "../../../../lib/sanitizeClient";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

function createSafeFilename(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_') 
    .replace(/_{2,}/g, '_'); 
}

async function uploadProfilePhoto(file, userName) {
  try {
    if (!process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY || !process.env.IMAGEKIT_URL_ENDPOINT) {
      throw new Error("ImageKit environment variables are not configured");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const safeFileName = createSafeFilename(userName);
    const fileName = `profile_${safeFileName}.${file.type.split('/')[1]}`;
    
    const result = await imagekit.upload({
      file: buffer,
      fileName: fileName,
      folder: "user-profiles",
      useUniqueFileName: false,
      overwriteFile: true
    });
    
    return result.url;
  } catch (error) {
    throw new Error("Failed to upload profile photo: " + error.message);
  }
}

async function deleteProfilePhoto(imageUrl) {
  try {
    const urlObj = new URL(imageUrl);
    const pathnameParts = urlObj.pathname.split('/');
    const folderIndex = pathnameParts.findIndex(p => p === 'user-profiles');
    
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
  try {
    await ConnectDB();
    
    const formData = await request.formData();
    
    const name = sanitizeText(formData.get("name"));
    const email = sanitizeText(formData.get("email"));
    const password = sanitizeText(formData.get("password"));
    const mobileno = sanitizeText(formData.get("mobileno"));
    const profilephoto = formData.get("profilephoto");
    const role = sanitizeText(formData.get("role"));

    if (!name || !email || !password || !mobileno || !role) {
      return NextResponse.json(
        { success: false, message: "Name, email, password, role, and mobile number are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    let profilePhotoUrl = null;

    if (profilephoto && profilephoto.size > 0) {
      try {
        profilePhotoUrl = await uploadProfilePhoto(profilephoto, name);
      } catch (uploadError) {
        return NextResponse.json(
          { success: false, message: "Failed to upload profile photo: " + uploadError.message },
          { status: 500 }
        );
      }
    }

    const userData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: password, 
      mobileno: mobileno.trim(),
      role: role.toLowerCase(),
      profilephoto: profilePhotoUrl
    };

    const user = new User(userData);
   
    await user.save();
    
    const responseUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      mobileno: user.mobileno,
      role: user.role,
      profilephoto: user.profilephoto,
      createdAt: user.createdAt
    };

    return NextResponse.json(
      { 
        success: true, 
        message: "User created successfully",
        user: responseUser
      },
      { status: 201 }
    );

  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.keys(error.errors).map(key => ({
        field: key,
        message: error.errors[key].message
      }));
      
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation failed",
          errors: validationErrors
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to create user",
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
    const email = searchParams.get('email');
    const name = searchParams.get('name');
    
    if (email) {
      const user = await User.findOne({ 
        email: sanitizeText(email.toLowerCase().trim()) 
      }).lean(); 
      
      if (!user) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }
      
      const responseUser = {
        _id: user._id,
        name: sanitizeText(user.name),
        email: user.email,
        mobileno: user.mobileno,
        role: user.role,
        profilephoto: user.profilephoto,
        createdAt: user.createdAt
      };
      
      return NextResponse.json({
        success: true,
        user: responseUser
      }, {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
    }
    
    if (name) {
      const user = await User.findOne({ name: name }).lean();
      if (!user) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        user: {
          name: user.name,
          profilephoto: user.profilephoto
        }
      });
    }
    
    const users = await User.find({ 
      $or: [
        { isActive: { $exists: false } },
        { isActive: true }
      ]
    })
      .select('-password') 
      .sort({ createdAt: -1 })
      .lean(); 
      
    return NextResponse.json({
      success: true,
      users
    });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch users" },
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
    
    const userId = formData.get("userId");
    const name = sanitizeText(formData.get("name"));
    const email = sanitizeText(formData.get("email"));
    const mobileno = sanitizeText(formData.get("mobileno"));
    const role = sanitizeText(formData.get("role"));
    const profilephoto = formData.get("profilephoto");
    const currentPassword = sanitizeText(formData.get("currentPassword"));
    const newPassword = sanitizeText(formData.get("newPassword"));
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const updateData = {};
    
    if (name) updateData.name = name.trim();
    if (email) updateData.email = email.toLowerCase().trim();
    if (mobileno) updateData.mobileno = mobileno.trim();
    if (role) updateData.role = role;

    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { success: false, message: "Current password is required to set new password" },
          { status: 400 }
        );
      }
      
      const isCurrentPasswordValid = await existingUser.isPasswordValid(currentPassword);
      if (!isCurrentPasswordValid) {
        return NextResponse.json(
          { success: false, message: "Current password is incorrect" },
          { status: 400 }
        );
      }
      
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(newPassword, salt);
    }

    if (profilephoto !== null) {
      if (profilephoto instanceof File && profilephoto.size > 0) {
        await deleteProfilePhoto(existingUser.profilephoto);
        
        const nameForPhoto = name ? name.trim() : existingUser.name;
        
        try {
          const newPhotoUrl = await uploadProfilePhoto(profilephoto, nameForPhoto);
          updateData.profilephoto = newPhotoUrl;
        } catch (uploadError) {
          return NextResponse.json(
            { success: false, message: "Failed to upload new profile photo: " + uploadError.message },
            { status: 500 }
          );
        }
        
      } else if (profilephoto === '' || profilephoto === null) {
        if (existingUser.profilephoto) {
          await deleteProfilePhoto(existingUser.profilephoto);
          updateData.profilephoto = null;
        }
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: "Failed to update user" },
        { status: 500 }
      );
    }

    const responseUser = {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      mobileno: updatedUser.mobileno,
      role: updatedUser.role,
      profilephoto: updatedUser.profilephoto,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt
    };

   
    return NextResponse.json(
      { 
        success: true, 
        message: "User updated successfully",
        user: responseUser
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        }
      }
    );

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to update user",
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
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    if (existingUser.profilephoto) {
      await deleteProfilePhoto(existingUser.profilephoto);
    }

    await User.findByIdAndUpdate(userId, { isActive: false });

    return NextResponse.json(
      { 
        success: true, 
        message: "User deleted successfully"
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to delete user",
        error: error.message 
      },
      { status: 500 }
    );
  }
}