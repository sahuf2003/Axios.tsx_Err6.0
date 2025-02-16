import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Freelancer from "@/models/freelancer";
import { connectToMongo } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
    try {
        await connectToMongo();

        const { name, email, password, position, bio, socialLinks } = await req.json() as {
            name: string;
            email: string;
            password: string;
            position: string;
            bio: string;
            socialLinks?: {
                linkedin?: string;
                github?: string;
            };
        };

        if (!name || !email || !password || !position || !bio) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const existingFreelancer = await Freelancer.findOne({ email });
        if (existingFreelancer) {
            return NextResponse.json({ message: "Freelancer already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newFreelancer = new Freelancer({
            name,
            email,
            password: hashedPassword,
            position,
            bio,
            socialLinks,
            badges: [], // Default empty badges array
        });

        await newFreelancer.save();

        return NextResponse.json({ message: "Freelancer registered successfully" }, { status: 201 });

    } catch (error) {
        console.error("❌ Error registering freelancer:", error);
        return NextResponse.json({ message: "Error registering freelancer", error: (error as Error).message }, { status: 500 });
    }
}
