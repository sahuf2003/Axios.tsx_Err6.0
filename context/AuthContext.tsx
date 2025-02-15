import { createContext, useContext, ReactNode } from "react";
import { useClerk } from "@clerk/nextjs";
import { UserResource } from "@clerk/types"; // Import UserResource from @clerk/types

// Define the type for the AuthContext
type AuthContextType = {
    user: UserResource | null | undefined; // Use UserResource instead of User
    loading: boolean;
    login: () => void;
    logout: () => void;
};

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { user, signOut } = useClerk();

    // Determine if the user is loaded
    const loading = !user;

    // Login logic (e.g., redirect to login page)
    const login = () => {
        // Add your login logic here
        console.log("Redirecting to login page...");
    };

    // Logout logic
    const logout = () => {
        signOut();
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};