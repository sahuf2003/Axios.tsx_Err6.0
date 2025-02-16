import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "altcoinsbox.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      }
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*", // Apply CORS to all API routes
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Allow all origins (⚠️ Change for production)
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
};

export default nextConfig;
