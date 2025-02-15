import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TrustedOrg from "@/components/TrustedOrg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />;
      <TrustedOrg />
      <Features />
      <Footer/>
    </>
  );
}
