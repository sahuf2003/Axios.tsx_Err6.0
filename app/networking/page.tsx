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
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-blue-600 flex items-center">
                <Users className="mr-2" /> Networking
            </h1>
            <p className="text-gray-600 mb-6">Join discussions and attend networking events to collaborate and grow.</p>

            {/* Event List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-2xl transition-all">
                        <CardContent className="flex items-center gap-4">
                            <Calendar className="w-12 h-12 text-blue-600" />
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold">{event.title}</h2>
                                <p className="text-sm text-gray-600">{event.date} | {event.location}</p>
                                <p className="text-gray-500 mt-2">{event.description}</p>
                            </div>
                        </CardContent>
                        <Button className="w-full py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none">
                            Register
                        </Button>
                    </Card>
                ))}
            </div>

            {/* Discussions Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold flex items-center text-gray-800">
                    <MessageCircle className="mr-2" /> Discussions
                </h2>
                <p className="text-gray-600 mb-4">Join and share insights in these impactful discussions.</p>
                <div className="space-y-6">
                    <Card className="hover:shadow-lg transition-all">
                        <CardContent>
                            <h3 className="text-lg font-semibold">How can freelancers contribute to social impact?</h3>
                            <p className="text-gray-500 mt-1">Join the conversation and share your insights.</p>
                            <Button variant="outline" className="mt-2">View Discussion</Button>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-all">
                        <CardContent>
                            <h3 className="text-lg font-semibold">Best tools for remote collaboration?</h3>
                            <p className="text-gray-500 mt-1">Discuss the best ways to work with NGOs remotely.</p>
                            <Button variant="outline" className="mt-2">View Discussion</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
