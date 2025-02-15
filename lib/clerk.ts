import { UserResource } from "@clerk/types"; // Use UserResource instead of UserProfile

export const clerkConfig = {
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
};

export const getClerkUserRoles = (user: UserResource) => {
    return user.publicMetadata?.role || "freelancer";
};