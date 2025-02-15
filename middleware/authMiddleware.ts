import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"; // Type definitions are now available
import User, { IUser } from "../models/User";
import { UserRole } from "../models/User";

// Extend the NextApiRequest type to include the `user` property
interface AuthenticatedRequest extends NextApiRequest {
    user: IUser;
}

// Define the type for the `next` function
type NextFunction = () => void;

const authenticate = async (req: AuthenticatedRequest, res: NextApiResponse, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Validate JWT_SECRET
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };

        // Find the user by ID
        const user: IUser | null = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        // Attach the user to the request object
        req.user = user;
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: "Unauthorized: Token expired" });
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        } else {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

const authorizeRoles = (roles: UserRole[]) => (req: AuthenticatedRequest, res: NextApiResponse, next: NextFunction) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: User not authenticated" });
    }

    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
    }

    next();
};

export { authenticate, authorizeRoles };