import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import Login from "@/pages/Login";
import AdminSidebar from "@/components/AdminSidebar";
import EmployeeSidebar from "@/components/EmployeeSidebar";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import AdminDashboard from "@/pages/Admin/Dashboard";
import Employees from "@/pages/Admin/Employees";
import AdminProjects from "@/pages/Admin/Projects";
import AdminTimeLogs from "@/pages/Admin/TimeLogs";
import Reports from "@/pages/Admin/Reports";
import AdminAssistant from "@/pages/Admin/Assistant";
import EmployeeDashboard from "@/pages/Employee/Dashboard";
import EmployeeTimeLogs from "@/pages/Employee/TimeLogs";
import EmployeeProjects from "@/pages/Employee/Projects";
import EmployeeAssistant from "@/pages/Employee/Assistant";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <ProtectedRoute requiredRole="ROLE_ADMIN">
      <SidebarProvider style={style as React.CSSProperties}>
        <div className="flex h-screen w-full">
          <AdminSidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-y-auto p-6 bg-background">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}

function EmployeeLayout({ children }: { children: React.ReactNode }) {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <ProtectedRoute requiredRole="ROLE_USER">
      <SidebarProvider style={style as React.CSSProperties}>
        <div className="flex h-screen w-full">
          <EmployeeSidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-y-auto p-6 bg-background">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Login} />
      
      <Route path="/admin-dashboard">
        <AdminLayout><AdminDashboard /></AdminLayout>
      </Route>
      <Route path="/admin-dashboard/employees">
        <AdminLayout><Employees /></AdminLayout>
      </Route>
      <Route path="/admin-dashboard/projects">
        <AdminLayout><AdminProjects /></AdminLayout>
      </Route>
      <Route path="/admin-dashboard/timelogs">
        <AdminLayout><AdminTimeLogs /></AdminLayout>
      </Route>
      <Route path="/admin-dashboard/reports">
        <AdminLayout><Reports /></AdminLayout>
      </Route>
      <Route path="/admin-dashboard/assistant">
        <AdminLayout><AdminAssistant /></AdminLayout>
      </Route>

      <Route path="/user-dashboard">
        <EmployeeLayout><EmployeeDashboard /></EmployeeLayout>
      </Route>
      <Route path="/user-dashboard/timelogs">
        <EmployeeLayout><EmployeeTimeLogs /></EmployeeLayout>
      </Route>
      <Route path="/user-dashboard/projects">
        <EmployeeLayout><EmployeeProjects /></EmployeeLayout>
      </Route>
      <Route path="/user-dashboard/assistant">
        <EmployeeLayout><EmployeeAssistant /></EmployeeLayout>
      </Route>

      <Route component={Login} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
