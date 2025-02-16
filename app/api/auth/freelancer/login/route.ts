import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Freelancer from "@/models/freelancer";
import { connectToMongo } from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
    try {
        await connectToMongo();

        const { email, password } = await req.json() as { email: string; password: string };

        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }

        const freelancer = await Freelancer.findOne({ email });
        if (!freelancer) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, freelancer.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const token = jwt.sign({ id: freelancer._id, email: freelancer.email }, JWT_SECRET, {
            expiresIn: "7d",
        });

        return NextResponse.json({ message: "Login successful", token }, { status: 200 });

    } catch (error) {
        console.error("❌ Error logging in freelancer:", error);
        return NextResponse.json({ message: "Error logging in freelancer", error: (error as Error).message }, { status: 500 });
    }
}
