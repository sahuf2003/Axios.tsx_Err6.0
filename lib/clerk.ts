import { UserProfile } from '@clerk/nextjs';

export const clerkConfig = {
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
};

// Use the `UserProfile` type to ensure proper typing for the `user`
export const getClerkUserRoles = (user: UserProfile) => {
    return user.publicMetadata?.role || 'freelancer';
};
