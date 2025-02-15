"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Projector, Link, Shield } from "lucide-react"; // Importing relevant icons

const features = [
  {
    title: "Seamless Collaboration",
    description:
      "Work effortlessly with teams, share resources, and communicate effectively.",
    icon: <Users size={48} className="text-blue-600" />, // Users icon
  },
  {
    title: "Smart Project Management",
    description:
      "Keep track of tasks, deadlines, and progress with intuitive tools.",
    icon: <Projector size={48} className="text-blue-600" />, // Projector icon
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with professionals and expand your career opportunities.",
    icon: <Link size={48} className="text-blue-600" />, // Link icon
  },
  {
    title: "Secure & Reliable Platform",
    description:
      "Your data is safe with our top-notch security measures and encryption.",
    icon: <Shield size={48} className="text-blue-600" />, // Shield icon
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800">What We Provide?</h2>
      <p className="text-lg text-gray-600 mt-2">Features That Make An Impact</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-12 lg:px-20">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 shadow-lg rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <CardContent className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div> {/* Displaying the icon */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
