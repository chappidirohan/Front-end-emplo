import DashboardCard from "@/components/DashboardCard";
import ChartCard from "@/components/ChartCard";
import { Briefcase, Users, TrendingUp } from "lucide-react";
import { mockChartData } from "@/lib/mockData";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  // TODO: remove mock functionality
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your organization</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Active Projects"
          value={12}
          icon={Briefcase}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Total Employees"
          value={48}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Productivity"
          value="91%"
          icon={TrendingUp}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Monthly Productivity Trend"
          data={mockChartData}
          type="line"
          dataKey="value"
          xAxisKey="month"
        />
        <ChartCard
          title="Project Completion Rate"
          data={mockChartData}
          type="bar"
          dataKey="value"
          xAxisKey="month"
        />
      </div>
    </motion.div>
  );
}
