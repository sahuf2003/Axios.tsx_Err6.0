// api/assessments/submit.ts
import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import AssessmentSubmission from "@/models/AssessmentSubmission";

export async function POST(request: Request) {
    const body = await request.json();
    const { userId, assessmentId, answers, files } = body;

    try {
        await connectToMongo();
        const newSubmission = new AssessmentSubmission({
            userId,
            assessmentId,
            answers,
            files,  // Assuming this contains URLs or references to uploaded files
        });
        await newSubmission.save();
        return NextResponse.json({ message: "Submission successful", submission: newSubmission });
    } catch (error) {
        console.log("Failed to submit assessment:", error);
        return NextResponse.json({ message: "Failed to submit assessment" }, { status: 500 });
    }
}
