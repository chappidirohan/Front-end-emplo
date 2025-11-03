import DashboardCard from "../DashboardCard";
import { Briefcase } from "lucide-react";

export default function DashboardCardExample() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Active Projects"
        value={12}
        icon={Briefcase}
        trend={{ value: 8, isPositive: true }}
      />
    </div>
  );
}
