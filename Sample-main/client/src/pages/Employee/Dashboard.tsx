import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChartCard from "@/components/ChartCard";
import StatusBadge from "@/components/StatusBadge";
import { Clock, Play, Square } from "lucide-react";
import { mockTasks, mockProductivityData } from "@/lib/mockData";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EmployeeDashboard() {
  // TODO: remove mock functionality
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [totalHours, setTotalHours] = useState(37.5);

  const handleClockToggle = () => {
    setIsClockedIn(!isClockedIn);
    console.log(isClockedIn ? 'Clocked out' : 'Clocked in');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Dashboard</h1>
        <p className="text-muted-foreground">Your personal workspace</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Time Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold">{isClockedIn ? 'Clocked In' : 'Clocked Out'}</p>
              </div>
              <Button
                onClick={handleClockToggle}
                variant={isClockedIn ? "destructive" : "default"}
                size="icon"
                data-testid="button-clock-toggle"
              >
                {isClockedIn ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
            <div className="pt-4 border-t">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold" data-testid="text-total-hours">{totalHours}h</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Today's Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 rounded-md border hover-elevate"
                  data-testid={`task-item-${task.id}`}
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-xs text-muted-foreground">Priority: {task.priority}</p>
                  </div>
                  <StatusBadge status={task.status} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <ChartCard
        title="Weekly Productivity"
        data={mockProductivityData}
        type="line"
        dataKey="hours"
        xAxisKey="day"
      />
    </motion.div>
  );
}
