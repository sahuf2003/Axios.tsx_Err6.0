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
<<<<<<< HEAD
    <div className="bg-white py-16 px-6 text-center overflow-hidden">
      <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Trusted by top NGOs:
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-16 min-w-max animate-scroll">
=======
    <div className="bg-white py-6 px-4 text-center overflow-hidden">
      <p className="text-lg font-medium text-gray-700 mb-6">
        Trusted by top NGOs:
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 min-w-max animate-scroll">
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="NGO Logo"
<<<<<<< HEAD
              className="w-[100px] md:w-[120px] object-contain transition-transform transform hover:scale-110 hover:opacity-80"
=======
              className="h-12 w-auto object-contain"
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
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
<<<<<<< HEAD
          animation: scroll 25s linear infinite;
=======
          animation: scroll 15s linear infinite;
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
        }
      `}</style>
    </div>
  );
};

export default TrustedOrg;
