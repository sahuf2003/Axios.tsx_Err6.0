import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

const ngos = ["Red Cross", "UNICEF", "WWF", "Save the Children", "Greenpeace"];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold">ImpactX</div>
        <div className="space-x-8 text-lg">
          <a href="#" className="hover:text-blue-600">Freelancer</a>
          <a href="#" className="hover:text-blue-600">Projects</a>
          <a href="#" className="hover:text-blue-600">Networking</a>
        </div>
        <div className="space-x-4">
          <SignInButton>
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">
          Your Skills. Their Mission. Our Future.
        </h1>
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Search for opportunities..." className="w-64" />
          <Button>Get Started</Button>
        </div>
      </section>

      {/* Scrolling NGO Logos */}
      <div className="overflow-hidden whitespace-nowrap bg-gray-200 py-3">
        <motion.div
          className="flex space-x-8"
          animate={{ x: [0, -100, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        >
          {ngos.map((ngo, index) => (
            <span key={index} className="text-lg font-medium">
              {ngo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;