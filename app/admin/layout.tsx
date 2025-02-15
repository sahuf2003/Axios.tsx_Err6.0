import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <main className="flex flex-1 items-center justify-center p-6">{children}</main>
            <Footer />
        </div>
    );
}
