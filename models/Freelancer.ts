import mongoose, { Schema, Document } from "mongoose";

interface IFreelancer extends Document {
    name: string;
    email: string;
    password: string;
    position: string;
    badges: string[];
    bio: string;
    socialLinks?: {
        linkedin?: string;
        github?: string;
    };
}

const FreelancerSchema = new Schema<IFreelancer>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    password: { type: String, required: true },
    badges: { type: [String], required: true },
    bio: { type: String, required: true },
    socialLinks: {
        linkedin: { type: String },
        github: { type: String },
    },
});

export default mongoose.models.Freelancer || mongoose.model<IFreelancer>("Freelancer", FreelancerSchema);
