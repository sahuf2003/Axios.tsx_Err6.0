// api/assessments/questions.ts
import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import Question from "@/models/Question";

export async function GET() {
    await connectToMongo();
    const questions = await Question.find({});
    return NextResponse.json({ questions });
}

export async function POST(request: Request) {
    const body = await request.json();
    const { assessmentId, questionText, options, correctAnswer } = body;

    try {
        await connectToMongo();
        const newQuestion = new Question({
            assessmentId,
            questionText,
            options,
            correctAnswer,
        });
        await newQuestion.save();
        return NextResponse.json({ message: "Question added successfully", question: newQuestion });
    } catch (error) {

        console.log("Error adding question:", error);
        return NextResponse.json({ message: "Failed to add question" }, { status: 500 });
    }
}
