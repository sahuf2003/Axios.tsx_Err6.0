import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
    throw new Error("⚠️ MONGODB_URI is not defined in .env.local");
}

export const connectToMongo = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("✅ MongoDB already connected");
            return;
        }

        await mongoose.connect(MONGO_URI, {
            dbName: "SkillBridgeDB",
        });

        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};
