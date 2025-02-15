import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    title: "Seamless Collaboration",
    description:
      "Work effortlessly with teams, share resources, and communicate effectively.",
    image: "/collaboration.jpg",
  },
  {
    title: "Smart Project Management",
    description:
      "Keep track of tasks, deadlines, and progress with intuitive tools.",
    image: "/impact.jpg",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with professionals and expand your career opportunities.",
    image: "/person.jpg",
  },
  {
    title: "Secure & Reliable Platform",
    description:
      "Your data is safe with our top-notch security measures and encryption.",
    image: "/verification.jpg",
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
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
