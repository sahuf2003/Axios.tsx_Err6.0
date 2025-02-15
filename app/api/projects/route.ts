// api/projects/route.ts
import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
    await connectToMongo();
    const projects = await Project.find({});
    return NextResponse.json({ projects });
}

export async function POST(request: Request) {
    const body = await request.json();
    const { title, description, ngoId } = body;

    try {
        await connectToMongo();
        const newProject = new Project({ title, description, ngoId });
        await newProject.save();
        return NextResponse.json({ message: "Project created successfully", project: newProject });
    } catch (error) {
        console.error("Failed to create project:", error);
        return NextResponse.json({ message: "Failed to create project" }, { status: 500 });
    }
}