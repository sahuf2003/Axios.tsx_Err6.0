import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold">ImpactX</h3>
            <p className="text-gray-300 mt-3">
              Empowering freelancers and professionals with seamless networking
              and collaboration tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/networking" className="text-gray-300 hover:text-white transition-colors">
                  Networking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="text-gray-300 mt-3 flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2" /> contact@impactx.com
            </p>
            <p className="text-gray-300 mt-2 flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2" /> +1 234 567 890
            </p>
          </div>

          {/* Social Media Links & Newsletter */}
          <div>
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-5 mt-4">
              <a href="https://facebook.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={26} />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={26} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={26} />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={26} />
              </a>
            </div>
            <h3 className="text-2xl font-bold mt-6">Newsletter</h3>
            <p className="text-gray-300 mt-3">
              Subscribe for updates and insights.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-3 p-2 rounded-md text-black"
            />
            <button className="mt-3 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} ImpactX. All rights reserved. |
            Designed by Team Axios
          </p>
        </div>
      </div>
    </footer>
  );
}
