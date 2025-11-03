// TODO: remove mock functionality

export const mockEmployees = [
  { id: 1, name: "Sarah Johnson", role: "Senior Developer", productivity: 94, status: "Active", email: "sarah.j@company.com" },
  { id: 2, name: "Michael Chen", role: "Product Manager", productivity: 88, status: "Active", email: "m.chen@company.com" },
  { id: 3, name: "Emily Davis", role: "UX Designer", productivity: 91, status: "Active", email: "e.davis@company.com" },
  { id: 4, name: "James Wilson", role: "DevOps Engineer", productivity: 85, status: "On Leave", email: "j.wilson@company.com" },
  { id: 5, name: "Lisa Anderson", role: "Frontend Developer", productivity: 92, status: "Active", email: "l.anderson@company.com" },
];

export const mockProjects = [
  { id: 1, name: "Mobile App Redesign", progress: 75, deadline: "2025-11-15", status: "In Progress", team: 5 },
  { id: 2, name: "API Gateway Migration", progress: 45, deadline: "2025-12-01", status: "In Progress", team: 3 },
  { id: 3, name: "Customer Portal v2", progress: 90, deadline: "2025-11-05", status: "In Progress", team: 4 },
  { id: 4, name: "Data Analytics Dashboard", progress: 30, deadline: "2025-12-20", status: "Planning", team: 2 },
  { id: 5, name: "Security Audit", progress: 100, deadline: "2025-10-28", status: "Completed", team: 2 },
];

export const mockTimeLogs = [
  { id: 1, employee: "Sarah Johnson", project: "Mobile App Redesign", hours: 8, date: "2025-10-30" },
  { id: 2, employee: "Michael Chen", project: "API Gateway Migration", hours: 7.5, date: "2025-10-30" },
  { id: 3, employee: "Emily Davis", project: "Customer Portal v2", hours: 6, date: "2025-10-30" },
  { id: 4, employee: "Lisa Anderson", project: "Mobile App Redesign", hours: 8, date: "2025-10-30" },
  { id: 5, employee: "Sarah Johnson", project: "Mobile App Redesign", hours: 7, date: "2025-10-29" },
  { id: 6, employee: "Michael Chen", project: "API Gateway Migration", hours: 8, date: "2025-10-29" },
];

export const mockTasks = [
  { id: 1, title: "Review pull requests", status: "Completed", priority: "High" },
  { id: 2, title: "Update API documentation", status: "In Progress", priority: "Medium" },
  { id: 3, title: "Team standup meeting", status: "Pending", priority: "High" },
  { id: 4, title: "Code refactoring", status: "In Progress", priority: "Low" },
];

export const mockProductivityData = [
  { day: "Mon", hours: 8 },
  { day: "Tue", hours: 7.5 },
  { day: "Wed", hours: 8 },
  { day: "Thu", hours: 6.5 },
  { day: "Fri", hours: 7 },
];

export const mockChartData = [
  { month: "Jul", value: 85 },
  { month: "Aug", value: 88 },
  { month: "Sep", value: 82 },
  { month: "Oct", value: 91 },
];

export const mockReportData = {
  weekly: {
    productivity: [
      { name: "Mon", hours: 42 },
      { name: "Tue", hours: 38 },
      { name: "Wed", hours: 45 },
      { name: "Thu", hours: 40 },
      { name: "Fri", hours: 36 },
    ],
    distribution: [
      { name: "Development", value: 45 },
      { name: "Meetings", value: 20 },
      { name: "Planning", value: 15 },
      { name: "Testing", value: 20 },
    ],
  },
  monthly: {
    productivity: [
      { name: "Week 1", hours: 165 },
      { name: "Week 2", hours: 172 },
      { name: "Week 3", hours: 158 },
      { name: "Week 4", hours: 180 },
    ],
    distribution: [
      { name: "Development", value: 180 },
      { name: "Meetings", value: 80 },
      { name: "Planning", value: 60 },
      { name: "Testing", value: 85 },
    ],
  },
};
