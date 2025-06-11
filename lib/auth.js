import { ConnectDB } from "./config/db";
import bcrypt from 'bcryptjs';
import { generateToken, registerSession, verifyToken } from "./jwt";
import User from "../lib/models/Users";
import sanitize from "mongo-sanitize";

export const authenticateUser = async (email, password) => {
    await ConnectDB();
    const cleanemail = sanitize(email).trim()
    const user = await User.findOne({email: cleanemail});
    if(!user){
        throw new Error('User not Found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        throw new Error('Invalid Password');
    }
    const token = await generateToken({
        userId: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role
    });

    const payload = await verifyToken(token);
    registerSession(user._id.toString(), payload.sessionId);

    return { token, user:{ id: user._id, email: user.email, name: user.name}};
}