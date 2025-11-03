import Navbar from "../Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function NavbarExample() {
  return (
    <SidebarProvider>
      <div className="w-full">
        <Navbar />
      </div>
    </SidebarProvider>
  );
}
