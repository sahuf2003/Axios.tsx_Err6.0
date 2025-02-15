
export default function FreelancerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <main className="container mx-auto p-4">{children}</main>

        </div>
    );
}