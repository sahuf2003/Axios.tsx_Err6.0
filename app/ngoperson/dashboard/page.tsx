"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { connectToMongo } from "@/lib/mongodb";
import Project from "@/models/Project";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Define the Project type
interface ProjectType {
  _id: string;
  title: string;
  description: string;
  budget: number;
  postedBy: string;
}

interface NewProject {
  title: string;
  description: string;
  budget: string;
}

export default function NGODashboardPage() {
  const { user, isLoaded, isSignedIn } = useUser();  // Use useUser hook from Clerk
  const [projects, setProjects] = useState<ProjectType[]>([]); // Typed as ProjectType[]
  const [newProject, setNewProject] = useState<NewProject>({ title: "", description: "", budget: "" }); // Typed as NewProject
  const router = useRouter();

  // Fetch projects if user is signed in
  useEffect(() => {
    const fetchData = async () => {
      if (!isSignedIn) {
        router.push("/unauthorized");
        return;
      }

      await connectToMongo();
      const userProjects = await Project.find({ postedBy: user?.id });
      setProjects(userProjects);
    };

    if (isLoaded && isSignedIn) {
      fetchData();
    }
  }, [isLoaded, isSignedIn, router, user]);

  // Handle input changes for the new project form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  // Handle the project posting form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newProject,
        postedBy: user?.id,
      }),
    });

    if (response.ok) {
      // Reload the projects after successful post
      const updatedProjects = await response.json();
      setProjects(updatedProjects);
      setNewProject({ title: "", description: "", budget: "" }); // Reset form
    } else {
      alert("Failed to post the project");
    }
  };

  if (!isSignedIn || !isLoaded) return <p>Unauthorized</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-blue-600">NGO Dashboard</h1>
      <p className="text-gray-600 mt-2">Welcome, {user?.firstName}!</p>

      <h2 className="text-2xl font-semibold mt-8">Your Posted Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project._id} className="border-b py-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">Budget: ${project.budget}</p>
          </li>
        ))}
      </ul>

      {/* Project Posting Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          placeholder="Project Title"
          required
          className="w-full p-3 border rounded-md"
        />
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          placeholder="Project Description"
          required
          className="w-full p-3 border rounded-md"
        />
        <input
          type="number"
          name="budget"
          value={newProject.budget}
          onChange={handleInputChange}
          placeholder="Budget"
          required
          className="w-full p-3 border rounded-md"
        />
        <Button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white">
          Post Project
        </Button>
      </form>
    </div>
  );
}
