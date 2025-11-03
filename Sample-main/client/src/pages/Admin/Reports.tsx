import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChartCard from "@/components/ChartCard";
import { mockReportData } from "@/lib/mockData";
import { motion } from "framer-motion";

export default function Reports() {
  // TODO: remove mock functionality
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Reports</h1>
        <p className="text-muted-foreground">Analyze productivity and time distribution</p>
      </div>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList data-testid="tabs-report-period">
          <TabsTrigger value="weekly" data-testid="tab-weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly" data-testid="tab-monthly">Monthly</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weekly" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Weekly Productivity (Hours)"
              data={mockReportData.weekly.productivity}
              type="bar"
              dataKey="hours"
            />
            <ChartCard
              title="Time Distribution"
              data={mockReportData.weekly.distribution}
              type="pie"
              dataKey="value"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="monthly" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Monthly Productivity (Hours)"
              data={mockReportData.monthly.productivity}
              type="bar"
              dataKey="hours"
            />
            <ChartCard
              title="Time Distribution"
              data={mockReportData.monthly.distribution}
              type="pie"
              dataKey="value"
            />
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
