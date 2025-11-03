import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTimeLogs } from "@/lib/mockData";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function TimeLogs() {
  // TODO: remove mock functionality
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Time Logs</h1>
        <p className="text-muted-foreground">Track employee working hours</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Time Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold">Employee</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Project</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Hours</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {mockTimeLogs.map((log) => (
                  <tr key={log.id} className="border-b hover-elevate" data-testid={`row-timelog-${log.id}`}>
                    <td className="py-3 px-4 font-medium">{log.employee}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{log.project}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{log.hours}h</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{new Date(log.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
