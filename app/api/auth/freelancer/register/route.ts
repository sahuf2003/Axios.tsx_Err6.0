import { NextRequest, NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import Freelancer from "@/models/freelancer";
import bcrypt from "bcryptjs";

export async function OPTIONS() {
    const response = NextResponse.json({}, { status: 200 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}

export async function POST(req: NextRequest) {
    try {
        await connectToMongo();

        const { name, email, password, position, bio, skills, gender, age, education, socialLinks } = await req.json();

        if (!name || !email || !password) {
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
            skills,
            gender,
            age,
            education,
            socialLinks,
        });

        await newFreelancer.save();

        return NextResponse.json({ message: "Freelancer registered successfully" }, { status: 201 });

    } catch (error) {
        console.error("❌ Error registering freelancer:", error);
        return NextResponse.json({ message: "Error registering freelancer", error: (error as Error).message }, { status: 500 });
    }
}
