import mongoose, { Schema, Document } from "mongoose";

interface Project extends Document {
    title: string;
    ngo: string;
    description: string;
    price: string;
}

const projectSchema: Schema = new Schema({
    title: { type: String, required: true },
    ngo: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
});

const ProjectModel = mongoose.models.Project || mongoose.model<Project>("Project", projectSchema);

export default ProjectModel;
