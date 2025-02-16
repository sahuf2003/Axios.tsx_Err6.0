'use client';

import React from 'react';
import { useUser } from '@clerk/nextjs';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DashboardPage = () => {
    const { user, isLoaded } = useUser();

    // Dummy data for dashboard
    const dummyStats = {
        totalProjectsCompleted: 5,
        projectsInProgress: 2,
        totalEarnings: 7500
    };

    if (!isLoaded) return <div>Loading...</div>;
    if (!user) return <div>Unauthorized</div>;

    return (
        <div className="p-6">
            <NavigationMenu />
            <h1 className="text-3xl font-bold text-blue-600">Welcome {user.firstName}!</h1>
            <p className="text-lg mt-4">Monitor your progress, manage tasks, and apply for new projects.</p>

            {/* Example cards showing stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Card>
                    <CardContent>
                        <h2 className="font-semibold">Total Projects Completed</h2>
                        <p className="text-xl">{dummyStats.totalProjectsCompleted}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <h2 className="font-semibold">Projects in Progress</h2>
                        <p className="text-xl">{dummyStats.projectsInProgress}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <h2 className="font-semibold">Total Earnings</h2>
                        <p className="text-xl">${dummyStats.totalEarnings}</p>
                    </CardContent>
                </Card>
            </div>

            <Button className="mt-8 bg-blue-600 hover:bg-blue-700">View Projects</Button>
        </div>
    );
};

export default DashboardPage;