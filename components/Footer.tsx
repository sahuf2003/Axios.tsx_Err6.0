<<<<<<< HEAD
"use client";

import React from "react";
import Link from "next/link";
=======
// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-black to-blue-700 text-white py-12 mt-10">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           {/* About Section */}
//           <div>
//             <h3 className="text-2xl font-bold">SkillBridge</h3>
//             <p className="text-gray-300 mt-3">
//               Empowering freelancers and professionals with seamless networking and collaboration tools.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-2xl font-bold">Quick Links</h3>
//             <ul className="mt-4 space-y-3">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Networking</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <h3 className="text-2xl font-bold">Follow Us</h3>
//             <div className="flex justify-center md:justify-start space-x-5 mt-4">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaFacebook size={26} /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaTwitter size={26} /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaLinkedin size={26} /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaInstagram size={26} /></a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-300">
//           <p>&copy; 2025 SkillBridge. All rights reserved. | Designed for professionals</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
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
<<<<<<< HEAD
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
=======
    <footer className="bg-gradient-to-r from-black to-blue-700 text-white py-16 mt-10">
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
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Networking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
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
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook size={26} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={26} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
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
            <button className="mt-3 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} ImpactX. All rights reserved. |
            Designed by Team Axios.tsx
          </p>
        </div>
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
      </div>
    </footer>
  );
}
