// api/assessments/leaderboard.ts
import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import AssessmentSubmission from "@/models/AssessmentSubmission";
import Freelancer from "@/models/Freelancer";

// Define a type for the submission object
type Submission = {
    _id: string; // Assuming userId is a string
    totalPoints: number;
};

export async function GET() {
    await connectToMongo();

    const submissions = await AssessmentSubmission.aggregate([
        {
            $group: {
                _id: "$userId",
                totalPoints: { $sum: "$points" },
            },
        },
        {
            $sort: { totalPoints: -1 },
        },
        {
            $limit: 10,
        },
    ]);

    const leaderboard = await Promise.all(
        submissions.map(async (submission: Submission) => {
            const freelancer = await Freelancer.findById(submission._id);
            return {
                name: freelancer?.name || "Unknown",
                points: submission.totalPoints,
            };
        })
    );

    return NextResponse.json({ leaderboard });
}