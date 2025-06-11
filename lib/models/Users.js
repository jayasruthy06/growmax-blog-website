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
  password: { 
    type: String, 
    required: true,
    minlength: 8 
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
  role: {
    type: String,
    enum: ['editor', 'admin'],
    default: 'editor'
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  lastLoginAt:{
    type: Date
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


userSchema.pre('save', async function(next) {
  this.updatedAt = new Date();
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password,10);
  next();
});


userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};


userSchema.methods.getPublicData = function() {
  const userObject = this.toObject();
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