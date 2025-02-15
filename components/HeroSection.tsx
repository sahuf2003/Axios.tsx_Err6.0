import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
