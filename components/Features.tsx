"use client"; 

import React from "react";
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
      "Manage your projects with intelligent tools and real-time updates.",
    icon: <Projector size={48} className="text-green-600" />, // Project icon
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

export default function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
