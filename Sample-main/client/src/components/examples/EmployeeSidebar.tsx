import EmployeeSidebar from "../EmployeeSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function EmployeeSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <EmployeeSidebar />
      </div>
    </SidebarProvider>
  );
}
