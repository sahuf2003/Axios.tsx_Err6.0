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
      </div>
    </footer>
  );
}
