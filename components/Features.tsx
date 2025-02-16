import React from "react";
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
      "Manage your projects with intelligent tools and real-time updates.",
    image: "/impact.jpg",
  },
  {
    title: "Secure & Reliable Platform",
    description:
      "Your data is safe with our top-notch security measures and encryption.",
    image: "/verification.jpg",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h4 className="text-md font-semibold text-left text-gray-800 mb-2">
          What We Provide ?
        </h4>
        <h2 className="text-xl md:text-4xl font-bold text-left text-gray-800 mb-10">
          Features That Make An Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-black p-6 rounded-lg shadow-md flex flex-col items-left text-left hover:shadow-xl transition-shadow"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={300}
                className="rounded-full"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
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
