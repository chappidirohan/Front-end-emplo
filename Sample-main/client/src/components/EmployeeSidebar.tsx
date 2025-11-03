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
import { LayoutDashboard, Clock, Briefcase, MessageSquare } from "lucide-react";
import { useLocation } from "wouter";

const menuItems = [
  { title: "Dashboard", url: "/user-dashboard", icon: LayoutDashboard, testId: "link-employee-dashboard" },
  { title: "Time Logs", url: "/user-dashboard/timelogs", icon: Clock, testId: "link-employee-timelogs" },
  { title: "Projects", url: "/user-dashboard/projects", icon: Briefcase, testId: "link-employee-projects" },
  { title: "AI Assistant", url: "/user-dashboard/assistant", icon: MessageSquare, testId: "link-employee-assistant" },
];

export default function EmployeeSidebar() {
  const [location, setLocation] = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold px-4 py-3">
            Employee Portal
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
