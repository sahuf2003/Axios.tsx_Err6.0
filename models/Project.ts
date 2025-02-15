import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    title: string;
    ngo: mongoose.Types.ObjectId;
    description: string;
    price: number;
}

const ProjectSchema: Schema<IProject> = new Schema(
    {
        title: { type: String, required: true },
        ngo: { type: Schema.Types.ObjectId, ref: "Ngo", required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
export default Project;
