import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true 
  },
  passwordHash: { 
    type: String, 
    required: true 
  },
  profilephoto: { 
    type: String, 
    default: null 
  },
  mobileno: { 
    type: String, 
    required: true,
    trim: true 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});


userSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});


userSchema.methods.isPasswordValid = async function(password) {
  return await bcrypt.compare(password, this.passwordHash);
};


userSchema.methods.getPublicData = function() {
  const userObject = this.toObject();
  delete userObject.passwordHash;
  delete userObject.password;
  return userObject;
};


userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};


userSchema.statics.findByName = function(name) {
  return this.findOne({ name: name, isActive: true });
};

export default mongoose.models.User || mongoose.model('User', userSchema);