import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import NGO from "@/models/ngo";
import { connectToMongo } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
    try {
        await connectToMongo();
        const { name, email, password, registrationNo, description, socialLinks } = await req.json();

        if (!name || !email || !password || !registrationNo || !description) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const existingNGO = await NGO.findOne({ email });
        if (existingNGO) {
            return NextResponse.json({ message: "NGO already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newNGO = new NGO({
            name,
            email,
            password: hashedPassword,
            registrationNo,
            description,
            socialLinks,
        });

        await newNGO.save();

        return NextResponse.json({ message: "NGO registered successfully" }, { status: 201 });

    } catch (error: unknown) {
        console.error("❌ Error registering NGO:", (error as Error).message);
        return NextResponse.json(
            { message: "Error registering NGO", error: (error as Error).message },
            { status: 500 }
        );
    }
}
