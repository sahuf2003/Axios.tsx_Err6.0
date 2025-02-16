import React from "react";

const features = [
  {
    title: "NGO Project 1",
    description:
      "This project focuses on providing education to underprivileged children.",
    image: "/path/to/dummy-image.jpg",
  },
  {
    title: "NGO Project 2",
    description:
      "This project aims to improve healthcare facilities in rural areas.",
    image: "/path/to/dummy-image.jpg",
  },
  {
    title: "NGO Project 3",
    description:
      "This project works towards environmental conservation and sustainability.",
    image: "/path/to/dummy-image.jpg",
  },
];

export default function CurrentProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h4 className="text-md font-semibold text-left text-gray-800 mb-2">
          Begin Exploring The NGO Development Scene
        </h4>
        <h2 className="text-xl md:text-4xl font-bold text-left text-gray-800 mb-10">
          Explore Current Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-black p-6 rounded-lg shadow-md flex flex-col items-left text-left hover:shadow-xl transition-shadow"
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                width: '300px'
              }}
            >
              <div className="bg-white bg-opacity-75 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 text-xs">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}