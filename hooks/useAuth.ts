import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export const useAuth = () => {
    const { user, signOut } = useClerk();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user !== undefined) {
            setLoading(false);
        }
    }, [user]);

    return { user, loading, signOut };
};
