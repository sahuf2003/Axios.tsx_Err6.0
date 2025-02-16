import mongoose, { Schema, Document } from "mongoose";

interface IFreelancer extends Document {
    name: string;
    email:string;
    password:string;
    skills: string[];
    position: string;
    gender: string;
    age: number;
    bio: string;
    education: string;
    socialLinks: string[];

}

const FreelancerSchema = new Schema<IFreelancer>({
    name: { type: String, required: true },
    email: {type:String, required:true},
    password: {type:String, required:true},
    skills: { type: [String], required: true },
    position: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    bio: { type: String, required: true },
    education: { type: String, required: true },
    socialLinks: { type: [String], required: true }

});

export default mongoose.models.Freelancer || mongoose.model<IFreelancer>("Freelancer", FreelancerSchema);