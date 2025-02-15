// models/User.ts

import mongoose from "mongoose";

const FreelancerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["admin", "freelancer"], required: true },
        Address: { type: String, required: true },
        Phone: { type: String, required: true },
        Skills: { type: String, required: true },
        Experience: { type: String, required: true },
        Education: { type: String, required: true },
        Image: { type: String, required: true },
    },
    { timestamps: true }
);

const Freelancer = mongoose.models.Freelancer || mongoose.model("Freelancer", FreelancerSchema);

export default Freelancer;
