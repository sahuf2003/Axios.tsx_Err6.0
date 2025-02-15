'use client';

import React from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const FreelancerPage = () => {
    const { user, isLoaded } = useUser();
    const router = useRouter(); // Initialize the router

    if (!isLoaded) return <p>Loading...</p>;
    if (!user) return <p>Unauthorized</p>;

    const handleDashboardClick = () => {
        router.push('/freelancer/dashboard'); // Navigate to /freelancer/dashboard
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-600">Welcome to ImpactX, {user.firstName}!</h1>
            <p className="mt-4 text-gray-600">
                Browse projects, take assessments, and start your freelance journey with us.
            </p>

            <Button
                className="mt-6 bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleDashboardClick} // Add onClick handler
            >
                Go to Dashboard
            </Button>
        </div>
    );
};

export default FreelancerPage;