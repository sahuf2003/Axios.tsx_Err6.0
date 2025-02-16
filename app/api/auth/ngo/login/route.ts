import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import NGO from "@/models/ngo";
import { connectToMongo } from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function POST(req: NextRequest) {
    try {
        await connectToMongo();
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }

        const ngo = await NGO.findOne({ email });
        if (!ngo) {
            return NextResponse.json({ message: "NGO not found" }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, ngo.password);
        if (!isMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const token = jwt.sign({ id: ngo._id, email: ngo.email }, JWT_SECRET, { expiresIn: "1d" });

        return NextResponse.json({ message: "Login successful", token }, { status: 200 });

    } catch (error: unknown) {
        console.error("❌ Error logging in NGO:", (error as Error).message);
        return NextResponse.json(
            { message: "Error logging in NGO", error: (error as Error).message },
            { status: 500 }
        );
    }
}
