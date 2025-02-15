import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
=======
import { ClerkProvider } from "@clerk/nextjs";
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImpactX",
  description: "SkillBridge",
<<<<<<< HEAD
  icons: {
    icon: "/favicon.ico", 
  },
=======
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
<<<<<<< HEAD
        <head>
          {/* Other head tags can go here */}
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
=======
        <body>{children}</body>
>>>>>>> 965dc2e29ba1ddd8a31e0072c94410a07d045452
      </html>
    </ClerkProvider>
  );
}
