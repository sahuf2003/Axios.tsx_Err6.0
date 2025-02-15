"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Projector, Link, Shield } from "lucide-react"; // Importing relevant icons
=======
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452

const features = [
  {
    title: "Seamless Collaboration",
    description:
      "Work effortlessly with teams, share resources, and communicate effectively.",
<<<<<<< HEAD
    icon: <Users size={48} className="text-blue-600" />, // Users icon
=======
    image: "/collaboration.jpg",
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
  },
  {
    title: "Smart Project Management",
    description:
      "Keep track of tasks, deadlines, and progress with intuitive tools.",
<<<<<<< HEAD
    icon: <Projector size={48} className="text-blue-600" />, // Projector icon
=======
    image: "/impact.jpg",
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with professionals and expand your career opportunities.",
<<<<<<< HEAD
    icon: <Link size={48} className="text-blue-600" />, // Link icon
=======
    image: "/person.jpg",
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
  },
  {
    title: "Secure & Reliable Platform",
    description:
      "Your data is safe with our top-notch security measures and encryption.",
<<<<<<< HEAD
    icon: <Shield size={48} className="text-blue-600" />, // Shield icon
=======
    image: "/verification.jpg",
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
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
<<<<<<< HEAD
            className="p-6 shadow-lg rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <CardContent className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div> {/* Displaying the icon */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
=======
            className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition duration-300"
          >
            <CardContent className="flex flex-col items-center text-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
