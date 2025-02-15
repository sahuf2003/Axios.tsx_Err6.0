"use client";
import Image from "next/image";
import React from "react";

const logos = [
  "https://altcoinsbox.com/wp-content/uploads/2023/03/full-cronos-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirqXYBru89rBEDKfVCAK5Vbf_IKWcKEg9qQ&s",
  "https://altcoinsbox.com/wp-content/uploads/2023/03/full-cronos-logo.png",
  // Add more logos as needed
];

const TrustedOrg = () => {
  return (
    <div className="bg-white py-16 px-6 text-center overflow-hidden">
      <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Trusted by top NGOs:
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-16 min-w-max animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={120}
              height={120}
              alt="NGO Logo"
              className="w-[100px] md:w-[120px] object-contain transition-transform transform hover:scale-110 hover:opacity-80"
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
            transform: translateX(-100%);
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
