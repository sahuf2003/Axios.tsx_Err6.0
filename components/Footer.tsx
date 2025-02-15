"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 font-semibold">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Brand and About */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">ImpactX</h3>
          <p className="text-sm mt-2 max-w-xs">
            Connecting freelancers and NGOs for meaningful collaborations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/networking" className="hover:underline">
                Networking
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-sm flex items-center mt-2">
            <FaEnvelope className="mr-2" /> contact@impactx.com
          </p>
          <p className="text-sm flex items-center mt-1">
            <FaPhone className="mr-2" /> +1 234 567 890
          </p>
        </div>

        {/* Social Media */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" className="hover:text-gray-200">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-gray-200">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-gray-200">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-gray-200">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-400 mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} ImpactX. All rights reserved.</p>
      </div>
    </footer>
  );
}
