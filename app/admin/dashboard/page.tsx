import { currentUser } from "@clerk/nextjs/server";
import { connectToMongo } from "@/lib/mongodb";
import User from "@/models/User";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
    const user = await currentUser();
    if (!user) redirect("/");

    await connectToMongo();
    const allUsers = await User.find({});

    return (
        <div className="container mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
                Welcome, <span className="font-semibold">{user.firstName}</span>!
            </p>

            <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">All Users</h2>
            {allUsers.length > 0 ? (
                <ul className="mt-4 space-y-2">
                    {allUsers.map((u) => (
                        <li
                            key={u._id}
                            className="p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                        >
                            {u.firstName} {u.lastName} - <span className="font-medium">{u.role}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="mt-4 text-gray-600 dark:text-gray-400">No users found.</p>
            )}
        </div>
    );
}
