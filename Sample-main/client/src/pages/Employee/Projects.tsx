import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressBar from "@/components/ProgressBar";
import StatusBadge from "@/components/StatusBadge";
import { mockProjects } from "@/lib/mockData";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function EmployeeProjects() {
  // TODO: remove mock functionality
  const assignedProjects = mockProjects.filter(p => p.status !== "Completed");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">My Projects</h1>
        <p className="text-muted-foreground">Track your assigned projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignedProjects.map((project) => (
          <Card key={project.id} data-testid={`card-project-${project.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <StatusBadge status={project.status} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <ProgressBar value={project.progress} />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Due: {new Date(project.deadline).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
