"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Search, User } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation"; // Import for navigation

const freelancers = [
    { name: "Alice Johnson", skill: "UI/UX Designer", experience: "5 Years", location: "New York" },
    { name: "David Smith", skill: "Full Stack Developer", experience: "3 Years", location: "San Francisco" },
    { name: "Emily Davis", skill: "Data Analyst", experience: "2 Years", location: "Remote" },
];

export default function FreelancerPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const router = useRouter(); // Use router for redirection

    const filteredFreelancers = freelancers.filter((freelancer) =>
        freelancer.skill.toLowerCase().includes(search.toLowerCase()) ||
        freelancer.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold flex items-center text-blue-600">
                <Briefcase className="mr-2" /> Freelancers
            </h1>
            <p className="text-gray-600 mb-4">Find skilled professionals for NGO projects</p>

            {/* Search and Filter */}
            <div className="flex items-center gap-4 bg-white p-4 shadow-md rounded-lg">
                <Input
                    className="flex-1"
                    placeholder="Search Freelancers"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">{filter}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setFilter("All")}>All</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter("UI/UX")}>UI/UX</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setFilter("Developer")}>Developer</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Search className="mr-2 h-4 w-4" /> Search
                </Button>
            </div>

            {/* Dashboard Button */}
            <div className="mt-6 text-right">
                <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => router.push("/freelancer/dashboard")} // Redirect on click
                >
                    Your Dashboard
                </Button>
            </div>

            {/* Freelancer List (Grid Layout) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFreelancers.length > 0 ? (
                    filteredFreelancers.map((freelancer, index) => (
                        <Card key={index} className="p-4 flex items-center gap-4 border hover:shadow-lg transition">
                            <User className="w-12 h-12 text-blue-600" />
                            <CardContent className="flex-1">
                                <h2 className="text-lg font-semibold">{freelancer.name}</h2>
                                <p className="text-sm text-gray-600">{freelancer.skill} - {freelancer.experience}</p>
                                <p className="text-sm text-gray-500 mt-1">📍 {freelancer.location}</p>
                            </CardContent>
                            <Button className="bg-green-600 hover:bg-green-700">Hire</Button>
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-6">❌ No freelancers found.</p>
                )}
            </div>
        </div>
    );
}
