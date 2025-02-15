"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const projectDetails = {
    "ui-ux-designer": { title: "UI/UX Designer", ngo: "Health First NGO", description: "Redesign our website to improve accessibility.", price: "$100/Monthly" },
    "backend-developer": { title: "Backend Developer", ngo: "Code for Change", description: "Help us build an API for real-time data sharing.", price: "Unpaid" },
    "content-writer": { title: "Content Writer", ngo: "Education for All", description: "Create blog content about education equality.", price: "$50/Article" },
};

export default function ProjectDetailPage() {
    const { id } = useParams(); // Get project ID from URL
    const project = projectDetails[id as keyof typeof projectDetails];

    const [form, setForm] = useState({
        name: "",
        email: "",
        experience: "",
        portfolio: "",
        coverLetter: "",
    });

    if (!project) {
        return <p className="text-center text-gray-500 mt-6">❌ Project not found.</p>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Application Submitted:", form);
        alert("Application submitted successfully!");
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Card className="p-6 border rounded-md shadow-lg">
                <CardContent>
                    <h1 className="text-2xl font-bold text-blue-600">{project.title}</h1>
                    <p className="text-gray-600">{project.ngo}</p>
                    <p className="text-sm text-gray-500 mt-2">{project.description}</p>
                    <p className="font-semibold mt-4 text-gray-900">Compensation: {project.price}</p>
                </CardContent>
            </Card>

            {/* Application Form */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Apply for this Project</h2>
                <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                    <Input
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-label="Your Name"
                        className="input-field"
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        aria-label="Your Email"
                        className="input-field"
                    />
                    <Input
                        name="experience"
                        type="number"
                        placeholder="Years of Experience"
                        value={form.experience}
                        onChange={handleChange}
                        required
                        aria-label="Years of Experience"
                        className="input-field"
                    />
                    <Input
                        name="portfolio"
                        placeholder="Portfolio Link (GitHub, Dribbble, etc.)"
                        value={form.portfolio}
                        onChange={handleChange}
                        required
                        aria-label="Portfolio Link"
                        className="input-field"
                    />
                    <Textarea
                        name="coverLetter"
                        placeholder="Why are you a good fit?"
                        value={form.coverLetter}
                        onChange={handleChange}
                        required
                        aria-label="Cover Letter"
                        className="input-field"
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Submit Application
                    </Button>
                </form>
            </div>
        </div>
    );
}
