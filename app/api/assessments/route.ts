// api/assessments/route.ts
import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import Assessment from "@/models/Assessment";

export async function GET() {
    await connectToMongo();
    const assessments = await Assessment.find({});
    return NextResponse.json({ assessments });
}

export async function POST(request: Request) {
    const body = await request.json();
    const { title, description, skillRequired } = body;

    try {
        await connectToMongo();
        const newAssessment = new Assessment({ title, description, skillRequired });
        await newAssessment.save();
        return NextResponse.json({ message: "Assessment created successfully", assessment: newAssessment });
    } catch (error) {
        console.log("Failed to create assessment:", error);
        return NextResponse.json({ message: "Failed to create assessment" }, { status: 500 });
    }
}
