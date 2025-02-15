import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
    throw new Error("⚠️ MONGODB_URI is not defined in .env.local");
}

let isConnected = false;

export const connectToMongo = async () => {
    if (isConnected) {
        console.log("✅ MongoDB already connected");
        return;
    }

    try {
        await mongoose.connect(MONGO_URI, {
            dbName: "SkillBridgeDB",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);

        isConnected = true;
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};
