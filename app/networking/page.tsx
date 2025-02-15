"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Users } from "lucide-react";

const events = [
    { title: "NGO Meetup 2025", date: "March 10, 2025", location: "Online", description: "A virtual meetup for NGOs and freelancers to collaborate." },
    { title: "Web3 for Social Good", date: "April 15, 2025", location: "San Francisco", description: "Exploring blockchain solutions for impact-driven projects." },
    { title: "Freelancer Networking", date: "May 5, 2025", location: "New York", description: "Connect with NGOs looking for skilled freelancers." },
];

export default function NetworkingPage() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold flex items-center text-blue-600"><Users className="mr-2" /> Networking</h1>
            <p className="text-gray-600 mb-4">Join discussions and attend networking events</p>

            {/* Event List */}
            <div className="mt-6 space-y-4">
                {events.map((event, index) => (
                    <Card key={index} className="p-4 flex items-start gap-4 border hover:shadow-lg transition">
                        <Calendar className="w-12 h-12 text-blue-600" />
                        <CardContent className="flex-1">
                            <h2 className="text-lg font-semibold">{event.title}</h2>
                            <p className="text-sm text-gray-600">📅 {event.date} | 📍 {event.location}</p>
                            <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                        </CardContent>
                        <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
                    </Card>
                ))}
            </div>

            {/* Discussions Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold flex items-center"><MessageCircle className="mr-2" /> Discussions</h2>
                <p className="text-gray-600 mb-4">Engage in meaningful conversations</p>
                <div className="space-y-4">
                    <Card className="p-4 border hover:shadow-lg transition">
                        <CardContent>
                            <h3 className="text-lg font-semibold">How can freelancers contribute to social impact?</h3>
                            <p className="text-sm text-gray-500 mt-1">Join the conversation and share your insights.</p>
                            <Button variant="outline" className="mt-2">View Discussion</Button>
                        </CardContent>
                    </Card>
                    <Card className="p-4 border hover:shadow-lg transition">
                        <CardContent>
                            <h3 className="text-lg font-semibold">Best tools for remote collaboration?</h3>
                            <p className="text-sm text-gray-500 mt-1">Discuss the best ways to work with NGOs remotely.</p>
                            <Button variant="outline" className="mt-2">View Discussion</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
