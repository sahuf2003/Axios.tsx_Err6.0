import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
<<<<<<< HEAD
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-gradient-to-b from-[#f0f9ff] to-white">
      {/* Subtext */}
      <p className="text-lg text-gray-600 mb-4 max-w-xl">
        Collaborate. Create. Change the world - your skills can make a difference.
      </p>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
        Your Skills. Their Mission. <br />
        <span className="text-blue-600">Our Future.</span>
      </h1>

      {/* Search Input & Button */}
      <div className="flex flex-col md:flex-row items-center gap-3 mt-8 w-full max-w-lg">
        <div className="relative w-full md:w-80">
          <Input
            placeholder="Search for opportunities..."
            className="w-full border border-gray-300 rounded-lg p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm transition-all"
          />
          {/* Search Icon */}
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 1 1 10.5 4a6.5 6.5 0 0 1 6.5 6.5z"
            />
          </svg>
        </div>

        <Button className="bg-blue-600 text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 shadow-md transition-all">
          Get Started
        </Button>
      </div>
    </section>
=======
    <>
      <section className="flex flex-col items-center justify-center text-center py-24">
        <p className="text-md text-gray-600 m-6 ">
          Collaborate. Create. Change the world—your skills can make a
          difference.
        </p>
        <h1 className="text-4xl md:text-6xl font-bold   leading-tight mb-5">
          Your Skills. Their Mission. <br />
          Our Future.
        </h1>

        <div className="flex items-center gap-3 mt-6">
          <Input
            placeholder="Search for opportunities..."
            className="w-72 border-2 border-gray-300 rounded-lg p-5 focus:border-[#0000FF]"
          />
          <Button className="bg-[#0000FF] text-white px-10 py-5 rounded-lg hover:bg-[#0000FF] text-md">
            Get Started
          </Button>
        </div>
      </section>
    </>
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
  );
};

export default HeroSection;
