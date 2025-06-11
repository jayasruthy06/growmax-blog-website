import { jwtVerify, SignJWT } from 'jose';
import jwt from 'jsonwebtoken'; 
import Sessions from "../lib/models/Sessions";
import { ConnectDB } from './config/db';

const encoder = new TextEncoder();
const JWT_SECRET = encoder.encode(process.env.JWT_SECRET);
const JWT_EXPIRES_IN = 5 * 60 * 1000; // testing, should be 7 days

export const generateToken = async (payload) => {
  const tokenPayload = {
    ...payload,
    sessionId: Date.now().toString(36) + Math.random().toString(36).substr(2),
    issuedAt: payload.issuedAt || Date.now()
};


  return await new SignJWT(tokenPayload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(`${JWT_EXPIRES_IN}s`)
    .sign(JWT_SECRET);
};

export const verifyToken = async (token) => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (err) {
    return null;
  }
};

export const getTokenExpiry = (token) => {
  try {
    const decoded = jwt.decode(token);
    return decoded.exp * 1000; 
  } catch (error) {
    return null;
  }
};

export const registerSession = async (userId, sessionId) => {
  await ConnectDB();

  await Sessions.findOneAndUpdate(
    {userId},
    {
      sessionId,
      lastSeen: new Date(),
      createdAt: new Date()
    },
    { upsert: true }
  )
}

export const isSessionActive = async (userId, sessionId) => {
  await ConnectDB();

  const session = await Sessions.findOne({ userId });
  if (!session || session.sessionId !== sessionId) {
    return false;
  }
  
  await Sessions.updateOne(
    { userId },
    { lastSeen: new Date() }
  );
  
  return true;
}

export const removeSession = async (userId) => {
  await ConnectDB();
  
  await Sessions.deleteOne({userId});
}