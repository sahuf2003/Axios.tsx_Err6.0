// models/Project.ts

import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        techstack:{type:String, required:true},
        description:{type:String,required:true},
        progress:{type:String, required:true},

    },
    { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;

