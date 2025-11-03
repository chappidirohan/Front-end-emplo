import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Briefcase, Clock, FileText, MessageSquare } from "lucide-react";
import { useLocation } from "wouter";

const menuItems = [
  { title: "Dashboard", url: "/admin-dashboard", icon: LayoutDashboard, testId: "link-admin-dashboard" },
  { title: "Employees", url: "/admin-dashboard/employees", icon: Users, testId: "link-admin-employees" },
  { title: "Projects", url: "/admin-dashboard/projects", icon: Briefcase, testId: "link-admin-projects" },
  { title: "Time Logs", url: "/admin-dashboard/timelogs", icon: Clock, testId: "link-admin-timelogs" },
  { title: "Reports", url: "/admin-dashboard/reports", icon: FileText, testId: "link-admin-reports" },
  { title: "AI Assistant", url: "/admin-dashboard/assistant", icon: MessageSquare, testId: "link-admin-assistant" },
];

export default function AdminSidebar() {
  const [location, setLocation] = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold px-4 py-3">
            Admin Portal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => setLocation(item.url)}
                    isActive={location === item.url}
                    data-testid={item.testId}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
