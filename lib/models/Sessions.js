import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    sessionId: {type: String, required: true},
    lastSeen: {type: Date, default: Date.now},
    createdAt: {type:Date, default: Date.now}
});

sessionSchema.index({lastSeen: 1}, {expireAfterSeconds: 7*24*60*60*1000});

export default mongoose.models.Sessions || mongoose.model('Sessions', sessionSchema);