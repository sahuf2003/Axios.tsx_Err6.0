"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Freelancer", href: "/freelancer" },
    { name: "Projects", href: "/projects" },
    { name: "Networking", href: "/networking" },
    { name: "Chatbot", href: "/chatbot" }, // New Link
    { name: "Document Sharing", href: "/documents" }, // New Link
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">ImpactX</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-blue-600 ${pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Authentication Section */}
        <div className="hidden md:flex space-x-4">
          <SignedOut>
            <Link href="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Sign Up
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-blue-600 ${pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <SignedOut>
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Login
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

=======
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

>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
export default Navbar;
