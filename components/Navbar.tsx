import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-[#0000FF]">ImpactX</div>
        <div className="space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-[#0000FF]">
            Freelancer
          </a>
          <a href="#" className="hover:text-[#0000FF]">
            Projects
          </a>
          <a href="#" className="hover:text-[#0000FF]">
            Networking
          </a>
        </div>
        <div className="space-x-4">
          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                className="border-[#0000FF] text-[#0000FF] hover:bg-[#0000FF] hover:text-white"
              >
                Login
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-[#0000FF] text-white hover:bg-[#0000FF]">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
