import CurrentProjects from "@/components/CurrentProjects";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import TrustedOrg from "@/components/TrustedOrg";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedOrg />
      <Features />
      <CurrentProjects/>
    </>
  );
}
