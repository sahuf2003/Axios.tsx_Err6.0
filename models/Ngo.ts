// models/User.ts

import mongoose from "mongoose";

const NgoSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["admin", "freelancer"], required: true },
        Address: { type: String, required: true },
        Phone: { type: String, required: true },
        Description: { type: String, required: true },
        Website: { type: String, required: true },
        Category: { type: String, required: true },
        Image: { type: String, required: true },
        
    },
    { timestamps: true }
);

const Ngo = mongoose.models.Ngo || mongoose.model("Ngo", NgoSchema);

export default Ngo;
