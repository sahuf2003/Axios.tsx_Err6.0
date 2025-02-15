import mongoose, { Schema, Document } from "mongoose";

export interface ISubmission extends Document {
    freelancer: mongoose.Types.ObjectId;
    assessment: mongoose.Types.ObjectId;
    fileUrl: string;
    score?: number;
}

const SubmissionSchema: Schema<ISubmission> = new Schema(
    {
        freelancer: { type: Schema.Types.ObjectId, ref: "Freelancer", required: true },
        assessment: { type: Schema.Types.ObjectId, ref: "Assessment", required: true },
        fileUrl: { type: String, required: true },
        score: { type: Number, default: null },
    },
    { timestamps: true }
);

const Submission =
    mongoose.models.Submission || mongoose.model<ISubmission>("Submission", SubmissionSchema);
export default Submission;
