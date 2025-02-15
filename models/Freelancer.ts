import mongoose, { Schema, Document } from "mongoose";

export interface IFreelancer extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    address: string;
    phone: string;
    skills: string[];
    experience: string;
    education: string;
    image: string;
}

const FreelancerSchema: Schema<IFreelancer> = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["admin", "freelancer"], required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        skills: { type: [String], required: true },
        experience: { type: String, required: true },
        education: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

const Freelancer =
    mongoose.models.Freelancer || mongoose.model<IFreelancer>("Freelancer", FreelancerSchema);
export default Freelancer;
