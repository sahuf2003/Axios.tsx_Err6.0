import { currentUser } from "@clerk/nextjs/server";
import { connectToMongo } from "@/lib/mongodb";
import Project from "@/models/Project";

export default async function NGODashboardPage() {
  const user = await currentUser();
  if (!user) return <p>Unauthorized</p>;

  await connectToMongo();
  const projects = await Project.find({ postedBy: user.id });

  return (
    <div>
      <h1>NGO Worker Dashboard</h1>
      <p>Welcome, {user.firstName}!</p>
      <h2>Your Posted Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.title} - ${project.budget}
          </li>
        ))}
      </ul>
      <form action="/api/projects" method="POST">
        <input type="text" name="title" placeholder="Project Title" required />
        <input type="text" name="description" placeholder="Description" required />
        <input type="number" name="budget" placeholder="Budget" required />
        <button type="submit">Post Project</button>
      </form>
    </div>
  );
}