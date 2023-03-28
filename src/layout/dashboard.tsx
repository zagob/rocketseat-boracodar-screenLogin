import { Menu } from "@/components/dashboard/menu";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="bg-[#7C3AED] min-h-screen text-gray-100 flex">
      <Menu />
      {children}
    </div>
  );
}
