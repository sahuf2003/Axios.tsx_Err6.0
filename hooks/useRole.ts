import { useAuth } from "./useAuth";
import { ROLES } from "@/utils/constants";

export const useRole = () => {
    const { user } = useAuth();

    const role = user?.publicMetadata?.role || ROLES.FREELANCER;

    return { role, isAdmin: role === ROLES.ADMIN, isNGO: role === ROLES.NGO };
};
