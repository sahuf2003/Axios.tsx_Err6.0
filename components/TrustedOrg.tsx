"use client";

import React from "react";

const logos = [
  "https://altcoinsbox.com/wp-content/uploads/2023/03/full-cronos-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirqXYBru89rBEDKfVCAK5Vbf_IKWcKEg9qQ&s",
  "https://altcoinsbox.com/wp-content/uploads/2023/03/full-cronos-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirqXYBru89rBEDKfVCAK5Vbf_IKWcKEg9qQ&s",
  "https://altcoinsbox.com/wp-content/uploads/2023/03/full-cronos-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirqXYBru89rBEDKfVCAK5Vbf_IKWcKEg9qQ&s",
  "https://altcoinsbox.com/wp-content/uploads/2023/03/full-cronos-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirqXYBru89rBEDKfVCAK5Vbf_IKWcKEg9qQ&s",
  "https://altcoinsbox.com/wp-content/uploads/2023/03/full-cronos-logo.png",
  // Add more logo URLs here
];

const TrustedOrg = () => {
  return (
    <div className="bg-white py-6 px-4 text-center overflow-hidden">
      <p className="text-lg font-medium text-gray-700 mb-6">
        Trusted by top NGOs:
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 min-w-max animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="NGO Logo"
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrustedOrg;
