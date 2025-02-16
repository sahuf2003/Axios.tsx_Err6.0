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
                Register
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








export default Navbar;
