"use client";

import { useUser } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { Bar, Pie } from "react-chartjs-2"; // Import for both bar and pie charts
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const dummyProjects = [
    { _id: "1", title: "Website Redesign", description: "Redesigning a non-profit website.", budget: 1500 },
    { _id: "2", title: "Mobile App for NGO", description: "Developing a mobile app for an NGO.", budget: 3000 },
    { _id: "3", title: "Data Analytics for Charity", description: "Data analytics project for improving charity operations.", budget: 2500 },
    { _id: "4", title: "Social Media Campaign", description: "Creating a social media marketing campaign.", budget: 2000 },
    { _id: "5", title: "Grant Management System", description: "Building a grant management platform.", budget: 4000 },
    { _id: "6", title: "Volunteer Portal", description: "Developing a portal to connect volunteers with NGOs.", budget: 1800 },
];

const pastProjects = [
    { _id: "7", title: "Fundraising Website", description: "Built a website for fundraising events.", budget: 1000 },
    { _id: "8", title: "NGO Data Management System", description: "Developed a data management system for an NGO.", budget: 3500 },
    { _id: "9", title: "Community Engagement App", description: "Created a mobile app for community engagement.", budget: 2000 },
];

const barGraphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Projects Completed',
            data: [5, 10, 7, 12, 9, 6], // Dummy data for the graph
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1,
        },
    ],
};

const pieGraphData = {
    labels: ['Tech Projects', 'Marketing Projects', 'Data Projects', 'Social Impact Projects'],
    datasets: [
        {
            data: [40, 20, 15, 25], // Dummy data for the pie chart
            backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#f44336'],
            hoverOffset: 4,
        },
    ],
};

export default function FreelancerDashboardPage() {
    const { user, isLoaded } = useUser();

    if (!isLoaded) return <p>Loading...</p>; // Show loading state while the user data is loading
    if (!user) return <p>Unauthorized</p>; // If user is not authenticated, show unauthorized message

    const projects = dummyProjects; // Using dummy data for now
    const completedProjects = pastProjects; // Using past projects data

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold flex items-center text-blue-600">
                <Briefcase className="mr-2" /> Freelancer Dashboard
            </h1>
            <p className="text-gray-600 mb-4">Welcome, {user.firstName}!</p>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {/* Bar Chart */}
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800">Projects Completed (Last 6 Months)</h2>
                    <div className="h-[300px]">
                        <Bar data={barGraphData} options={{ responsive: true }} />
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800">Project Category Distribution</h2>
                    <div className="h-[300px]">
                        <Pie data={pieGraphData} options={{ responsive: true }} />
                    </div>
                </div>
            </div>

            {/* Available Projects */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8">Available Projects</h2>

            {/* Available Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <Card key={project._id} className="border shadow-lg hover:shadow-xl transition">
                            <CardContent className="p-4">
                                <h3 className="text-lg font-semibold text-blue-600">{project.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                                <p className="text-sm text-gray-600 mt-2">Budget: ${project.budget}</p>
                                <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                                    Apply Now
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="col-span-3 text-center text-gray-500">❌ No available projects at the moment.</p>
                )}
            </div>

            {/* Past Projects */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8">Past Projects</h2>

            {/* Past Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {completedProjects.length > 0 ? (
                    completedProjects.map((project) => (
                        <Card key={project._id} className="border shadow-lg hover:shadow-xl transition">
                            <CardContent className="p-4">
                                <h3 className="text-lg font-semibold text-blue-600">{project.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                                <p className="text-sm text-gray-600 mt-2">Budget: ${project.budget}</p>
                                <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700" disabled>
                                    Completed
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="col-span-3 text-center text-gray-500">❌ No past projects.</p>
                )}
            </div>
        </div>
    );
}
