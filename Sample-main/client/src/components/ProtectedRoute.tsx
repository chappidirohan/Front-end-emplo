import { useEffect } from "react";
import { useLocation } from "wouter";
import { isAuthenticated, getUserRole } from "@/lib/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated()) {
      setLocation("/");
      return;
    }

    if (requiredRole) {
      const userRole = getUserRole();
      if (userRole !== requiredRole) {
        setLocation("/");
      }
    }
  }, [requiredRole, setLocation]);

  if (!isAuthenticated()) {
    return null;
  }

  if (requiredRole && getUserRole() !== requiredRole) {
    return null;
  }

  return <>{children}</>;
}
