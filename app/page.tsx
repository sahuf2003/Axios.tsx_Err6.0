import Features from "@/components/Features";;
import HeroSection from "@/components/HeroSection";
import TrustedOrg from "@/components/TrustedOrg";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />;
      <TrustedOrg />
      <Features />
    </>
  );
}
