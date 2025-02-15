import { currentUser } from "@clerk/nextjs/server";
import { connectToMongo } from "@/lib/mongodb";
import User from "@/models/User";

export default async function AdminDashboardPage() {
    const user = await currentUser();
    if (!user) return <p>Unauthorized</p>;

    await connectToMongo();
    const allUsers = await User.find({});

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, {user.firstName}!</p>
            <h2>All Users</h2>
            <ul>
                {allUsers.map((u) => (
                    <li key={u._id}>
                        {u.firstName} {u.lastName} - {u.role}
                    </li>
                ))}
            </ul>
        </div>
    );
}