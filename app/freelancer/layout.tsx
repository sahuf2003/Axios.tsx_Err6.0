import React from "react";
import { SidebarProvider } from "@/context/SidebarContext"; // Ensure SidebarProvider is correctly imported
import { NavigationMenu } from "@/components/ui/navigation-menu";

const FreelancerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider> {/* ✅ Wrap with SidebarProvider */}
            <div className="flex">
                {/* <Sidebar /> */}
                <div className="flex-1">
                    <NavigationMenu />
                    <main className="p-6">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default FreelancerLayout;
