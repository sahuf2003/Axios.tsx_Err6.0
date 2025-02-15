// freelancer/assessments/[category]/submit.tsx

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

const SubmitAssessmentPage = () => {
    const router = useRouter();
    const { category } = router.query;
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Dummy category-based data
    const dummyCategoryInfo = {
        'Web Development': 'Build a responsive portfolio website using HTML, CSS, and JavaScript.',
        'Mobile App': 'Create a simple mobile app with basic features like login and registration.',
        'Graphic Design': 'Design a logo with specific brand guidelines.',
        'Content Writing': 'Write a comprehensive blog post on modern web development practices.'
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!file) {
            alert('Please select a file to upload.');
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('description', description);

        try {
            // Simulating a successful form submission
            alert('Assessment submitted successfully!');
        } catch (error) {
            console.error('Error submitting assessment:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-600">Submit Assessment: {category}</h1>
            <p className="mt-4">{dummyCategoryInfo[category as keyof typeof dummyCategoryInfo]}</p>
            <form onSubmit={handleSubmit} className="mt-6">
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                    required
                    className="border p-2 rounded-lg"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter any additional information"
                    rows={4}
                    className="border p-2 rounded-lg mt-4 w-full"
                />
                <Button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
        </div>
    );
};

export default SubmitAssessmentPage;
