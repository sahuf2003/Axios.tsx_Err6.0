import mongoose, { Schema, Document } from "mongoose";

interface INGO extends Document {
    name: string;
    email: string;
    password: string;
    registrationNo: string;
    description: string;
    socialLinks?: {
        website?: string;
        twitter?: string;
    };
}

const NGOSchema = new Schema<INGO>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    registrationNo: { type: String, required: true },
    description: { type: String, required: true },
    socialLinks: {
        website: { type: String },
        twitter: { type: String },
    },
});

export default mongoose.models.NGO || mongoose.model<INGO>("NGO", NGOSchema);
