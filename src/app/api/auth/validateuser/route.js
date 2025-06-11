import { NextResponse } from "next/server";
import  { verifyToken } from "../../../../../lib/jwt";
import  { isSessionActive } from "../../../../../lib/jwt";
import { ConnectDB } from "../../../../../lib/config/db";

export async function POST(req){
    try{
        await ConnectDB();

        const {token} = await req.json();

        if(!token){
            return NextResponse.json({success: false, reason: 'No token provided'}, {status: 400})
        }

        const decoded = await verifyToken(token);

        if(!decoded){
            return NextResponse.json({ valid: false, reason: 'Invalid token signature' });
        }

        const isActive = await isSessionActive(decoded.userId, decoded.sessionId);
        if(!isActive){
            return NextResponse.json({ valid: false, reason: 'Session expired or logged in elsewhere' });
        }

        return NextResponse.json({ valid: true, user: decoded });
    } catch(error){
        console.error('API Session validation error:', error);
        return NextResponse.json({ valid: false, reason: 'Internal server error' }, { status: 500 });
    }
}