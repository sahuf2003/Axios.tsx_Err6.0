import mongoose, { Schema, Document } from "mongoose";

export interface INgo extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    address: string;
    phone: string;
    description: string;
    website: string;
    category: string;
    image: string;
}

const NgoSchema: Schema<INgo> = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["admin", "ngo"], required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        description: { type: String, required: true },
        website: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

const Ngo = mongoose.models.Ngo || mongoose.model<INgo>("Ngo", NgoSchema);
export default Ngo;
