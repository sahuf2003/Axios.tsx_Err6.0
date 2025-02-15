'use client';

import React, { useState, useEffect } from 'react';
import { Table } from '@/components/ui/table'; // Assuming you have a Table component
import { useUser } from '@clerk/nextjs';
import { Leaderboard } from '@/types'; // Import the Leaderboard type

const LeaderboardPage = () => {
    const [leaderboardData, setLeaderboardData] = useState<Leaderboard[]>([]);
    const { isLoaded } = useUser(); // Removed `user` since it's unused

    useEffect(() => {
        if (isLoaded) {
            // Fetch leaderboard data from your API or database
            fetch('/api/leaderboard')
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch leaderboard data');
                    }
                    return res.json();
                })
                .then((data) => setLeaderboardData(data.leaderboard || [])) // Fallback to empty array
                .catch((error) => {
                    console.error('Error fetching leaderboard:', error);
                });
        }
    }, [isLoaded]);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-600">Freelancer Leaderboard</h1>
            <p className="mt-4 text-gray-600">
                Top freelancers based on their performance and ranking points.
            </p>

            {/* Pass data to the Table component correctly */}
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.points}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default LeaderboardPage;