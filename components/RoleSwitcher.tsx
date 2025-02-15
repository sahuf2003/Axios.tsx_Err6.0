import React from "react";
import { useRouter } from "next/router";

const RoleSwitcher = () => {
    const router = useRouter();

    const switchRole = (role: string) => {
        // Switch role logic (e.g., change the route based on the role)
        if (role === "freelancer") {
            router.push("/freelancer");
        } else if (role === "ngo") {
            router.push("/ngo");
        }
    };

    return (
        <div className="flex space-x-4">
            <button onClick={() => switchRole("freelancer")} className="text-blue-600 hover:text-blue-800">
                Freelancer
            </button>
            <button onClick={() => switchRole("ngo")} className="text-blue-600 hover:text-blue-800">
                NGO
            </button>
        </div>
    );
};

export default RoleSwitcher;
