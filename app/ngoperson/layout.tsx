import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NGOLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}