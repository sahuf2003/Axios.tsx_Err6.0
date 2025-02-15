import mongoose, { Schema, Document } from "mongoose";

export interface IAssessment extends Document {
    title: string;
    category: string;
    questions: string[];
}

const AssessmentSchema: Schema<IAssessment> = new Schema(
    {
        title: { type: String, required: true },
        category: { type: String, required: true },
        questions: { type: [String], required: true },
    },
    { timestamps: true }
);

const Assessment =
    mongoose.models.Assessment || mongoose.model<IAssessment>("Assessment", AssessmentSchema);
export default Assessment;
