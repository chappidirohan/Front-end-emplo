import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import StatusBadge from "@/components/StatusBadge";
import { Search } from "lucide-react";
import { mockEmployees } from "@/lib/mockData";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

export default function Employees() {
  // TODO: remove mock functionality
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredEmployees = mockEmployees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Employees</h1>
        <p className="text-muted-foreground">Manage your team members</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employee Directory</CardTitle>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search employees..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="input-search-employees"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold">Employee</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Productivity</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee, index) => {
                  const initials = employee.name.split(' ').map(n => n[0]).join('');
                  return (
                    <tr key={employee.id} className="border-b hover-elevate" data-testid={`row-employee-${employee.id}`}>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-primary/10 text-primary text-sm">
                              {initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{employee.name}</p>
                            <p className="text-xs text-muted-foreground">{employee.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{employee.role}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary rounded-full h-2"
                              style={{ width: `${employee.productivity}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{employee.productivity}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <StatusBadge status={employee.status} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
