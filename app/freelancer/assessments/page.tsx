// freelancer/assessments/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';

type Assessment = {
    id: string;
    name: string;
    description: string;
};

const AssessmentsPage = () => {
    const [assessments, setAssessments] = useState<Assessment[]>([]);
    const { isLoaded } = useUser();

    // Dummy assessments data
    useEffect(() => {
        if (isLoaded) {
            const dummyAssessments: Assessment[] = [
                { id: '1', name: 'Web Development', description: 'Build a responsive website' },
                { id: '2', name: 'Mobile App', description: 'Develop a mobile application' },
                { id: '3', name: 'Graphic Design', description: 'Create a logo and branding material' },
                { id: '4', name: 'Content Writing', description: 'Write an article about web development trends' }
            ];
            setAssessments(dummyAssessments);
        }
    }, [isLoaded]);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-600">Freelancer Assessments</h1>
            <p className="mt-4 text-gray-600">Take assessments to improve your rank and credibility.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {assessments.map((assessment) => (
                    <div key={assessment.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-blue-600">{assessment.name}</h3>
                        <p className="text-gray-500 mt-2">{assessment.description}</p>
                        <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Start Assessment</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssessmentsPage;
