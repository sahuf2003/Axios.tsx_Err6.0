"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const dummyProjects = [
    { id: "ui-ux-designer", title: "UI/UX Designer", ngo: "Health First NGO", description: "Redesign our website to improve accessibility.", price: "$100/Monthly" },
    { id: "backend-developer", title: "Backend Developer", ngo: "Code for Change", description: "Help us build an API for real-time data sharing.", price: "Unpaid" },
    { id: "content-writer", title: "Content Writer", ngo: "Education for All", description: "Create blog content about education equality.", price: "$50/Article" },
];

export default function ProjectsPage() {
    const router = useRouter(); // Navigation hook
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredProjects = dummyProjects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-600">Search Projects</h1>

            {/* Search and Filter Section */}
            <div className="flex items-center gap-4 bg-white p-4 shadow-md rounded-lg">
                <Input
                    className="flex-1"
                    placeholder="Search Projects"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">{filter}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setFilter("All")}>All</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter("Paid")}>Paid</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter("Unpaid")}>Unpaid</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Projects List */}
            <div className="mt-6 space-y-4">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <Card key={project.id} className="p-4 flex items-start gap-4 border rounded-md shadow-lg">
                            <CardContent className="flex-1">
                                <h2 className="text-lg font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-600">{project.ngo}</p>
                                <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                            </CardContent>
                            <div className="flex flex-col items-end">
                                <p className="font-semibold text-black">{project.price}</p>
                                <Button
                                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                                    onClick={() => router.push(`/projects/${project.id}`)}
                                >
                                    Apply Now
                                </Button>
                            </div>
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-6">❌ No projects match your search.</p>
                )}
            </div>
        </div>
    );
}
