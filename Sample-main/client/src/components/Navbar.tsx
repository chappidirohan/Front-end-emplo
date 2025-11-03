import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useLocation } from "wouter";
import { clearAuthToken, decodeJWT, getAuthToken } from "@/lib/auth";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  const [, setLocation] = useLocation();
  
  const handleLogout = () => {
    clearAuthToken();
    setLocation("/");
  };

  const token = getAuthToken();
  const decoded = token ? decodeJWT(token) : null;
  const username = decoded?.username || "User";
  const initials = username.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-card">
      <div className="flex items-center gap-4">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9" data-testid="avatar-user">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden sm:inline" data-testid="text-username">{username}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          data-testid="button-logout"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
