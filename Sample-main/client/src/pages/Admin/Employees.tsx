// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import StatusBadge from "@/components/StatusBadge";
// import { Search } from "lucide-react";
// import { mockEmployees } from "@/lib/mockData";
// import { motion } from "framer-motion";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { useState } from "react";

// export default function Employees() {
//   // TODO: remove mock functionality
//   const [searchTerm, setSearchTerm] = useState("");
  
//   const filteredEmployees = mockEmployees.filter(emp =>
//     emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     emp.role.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//       className="space-y-6"
//     >
//       <div>
//         <h1 className="text-3xl font-bold" data-testid="text-page-title">Employees</h1>
//         <p className="text-muted-foreground">Manage your team members</p>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Employee Directory</CardTitle>
//           <div className="relative mt-4">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//             <Input
//               placeholder="Search employees..."
//               className="pl-10"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               data-testid="input-search-employees"
//             />
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b">
//                   <th className="text-left py-3 px-4 text-sm font-semibold">Employee</th>
//                   <th className="text-left py-3 px-4 text-sm font-semibold">Role</th>
//                   <th className="text-left py-3 px-4 text-sm font-semibold">Productivity</th>
//                   <th className="text-left py-3 px-4 text-sm font-semibold">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredEmployees.map((employee, index) => {
//                   const initials = employee.name.split(' ').map(n => n[0]).join('');
//                   return (
//                     <tr key={employee.id} className="border-b hover-elevate" data-testid={`row-employee-${employee.id}`}>
//                       <td className="py-3 px-4">
//                         <div className="flex items-center gap-3">
//                           <Avatar className="h-9 w-9">
//                             <AvatarFallback className="bg-primary/10 text-primary text-sm">
//                               {initials}
//                             </AvatarFallback>
//                           </Avatar>
//                           <div>
//                             <p className="font-medium">{employee.name}</p>
//                             <p className="text-xs text-muted-foreground">{employee.email}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 px-4 text-sm">{employee.role}</td>
//                       <td className="py-3 px-4">
//                         <div className="flex items-center gap-2">
//                           <div className="w-24 bg-muted rounded-full h-2">
//                             <div
//                               className="bg-primary rounded-full h-2"
//                               style={{ width: `${employee.productivity}%` }}
//                             />
//                           </div>
//                           <span className="text-sm font-medium">{employee.productivity}%</span>
//                         </div>
//                       </td>
//                       <td className="py-3 px-4">
//                         <StatusBadge status={employee.status} />
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Search, Plus, Pencil, Trash2 } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import StatusBadge from "@/components/StatusBadge";
// import { mockEmployees } from "@/lib/mockData";


// type Employee = {
//   id: number;
//   name: string;
//   role: string;
//   productivity: number;
//   status: string;
// };

// export default function Employees() {
//  // const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
//  const [employees, setEmployees] = useState([]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [showDialog, setShowDialog] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [currentEmployee, setCurrentEmployee] = useState<Employee | null>(null);

//   const [form, setForm] = useState({
//     name: "",
//     role: "",
//     productivity: "",
//     status: "Active",
//   });

//   const filtered = employees.filter(
//     (e) =>
//       e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       e.role.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const openAddDialog = () => {
//     setEditMode(false);
//     setForm({ name: "", role: "", productivity: "", status: "Active" });
//     setShowDialog(true);
//   };

//   const openEditDialog = (emp: Employee) => {
//     setEditMode(true);
//     setCurrentEmployee(emp);
//     setForm({
//       name: emp.name,
//       role: emp.role,
//       productivity: emp.productivity.toString(),
//       status: emp.status,
//     });
//     setShowDialog(true);
//   };

//   const handleSave = () => {
//     if (editMode && currentEmployee) {
//       setEmployees((prev) =>
//         prev.map((emp) =>
//           emp.id === currentEmployee.id
//             ? {
//                 ...emp,
//                 name: form.name,
//                 role: form.role,
//                 productivity: Number(form.productivity),
//                 status: form.status,
//               }
//             : emp
//         )
//       );
//     } else {
//       const newEmp: Employee = {
//         id: Date.now(),
//         name: form.name,
//         role: form.role,
//         productivity: Number(form.productivity),
//         status: form.status,
//       };
//       setEmployees((prev) => [...prev, newEmp]);
//     }
//     setShowDialog(false);
//   };

//   const handleDelete = (id: number) => {
//     if (confirm("Are you sure you want to delete this employee?")) {
//       setEmployees((prev) => prev.filter((e) => e.id !== id));
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.25 }}
//       className="space-y-6"
//     >
//       <div>
//         <h1 className="text-3xl font-bold">Employees</h1>
//         <p className="text-muted-foreground">Manage your team members</p>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Employee Directory</CardTitle>
//           <div className="flex items-center justify-between mt-4">
//             <div className="relative w-1/2">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search employees..."
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <Button onClick={openAddDialog} className="flex items-center gap-2">
//               <Plus className="w-4 h-4" /> Add Employee
//             </Button>
//           </div>
//         </CardHeader>

//         <CardContent className="space-y-3">
//           {filtered.length === 0 && (
//             <p className="text-center text-muted-foreground py-4">
//               No employees found
//             </p>
//           )}

//           {filtered.map((emp) => (
//             <div
//               key={emp.id}
//               className="flex items-center justify-between border rounded-xl p-3 hover:bg-accent transition"
//             >
//               <div className="flex items-center gap-4">
//                 <Avatar>
//                   <AvatarFallback>{emp.name.charAt(0)}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold">{emp.name}</p>
//                   <p className="text-sm text-muted-foreground">{emp.role}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <p className="text-sm text-muted-foreground">
//                   Productivity: {emp.productivity}%
//                 </p>
//                 <StatusBadge status={emp.status} />
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => openEditDialog(emp)}
//                 >
//                   <Pencil className="w-4 h-4" />
//                 </Button>
//                 <Button
//                   variant="destructive"
//                   size="icon"
//                   onClick={() => handleDelete(emp.id)}
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </CardContent>
//       </Card>

//       {/* Add/Edit Dialog */}
//       <Dialog open={showDialog} onOpenChange={setShowDialog}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>
//               {editMode ? "Edit Employee" : "Add New Employee"}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="grid gap-4 py-4">
//             <div>
//               <Label>Name</Label>
//               <Input
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label>Role</Label>
//               <Input
//                 value={form.role}
//                 onChange={(e) => setForm({ ...form, role: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label>Productivity (%)</Label>
//               <Input
//                 type="number"
//                 min={0}
//                 max={100}
//                 value={form.productivity}
//                 onChange={(e) =>
//                   setForm({ ...form, productivity: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <Label>Status</Label>
//               <Input
//                 value={form.status}
//                 onChange={(e) => setForm({ ...form, status: e.target.value })}
//               />
//             </div>
//           </div>

//           <DialogFooter>
//             <Button onClick={handleSave}>
//               {editMode ? "Update Employee" : "Add Employee"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </motion.div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Pencil, Trash2, Plus } from "lucide-react";

// const API_URL = "http://localhost:8080/api/employees";

// export default function EmployeePage() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     role: "",
//     productivity: "",
//     status: "",
//   });
//   const [open, setOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   // ✅ Fetch employees from backend
//   const fetchEmployees = async () => {
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) throw new Error("Failed to fetch employees");
//       const data = await response.json();
//       setEmployees(data);
//     } catch (err) {
//       setError("Error loading data");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Add or Edit employee
//   const handleSave = async () => {
//     const method = editMode ? "PUT" : "POST";
//     const url = editMode ? `${API_URL}/${formData.id}` : API_URL;

//     try {
//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error("Failed to save employee");

//       await fetchEmployees();
//       setOpen(false);
//       setFormData({ id: "", name: "", role: "", productivity: "", status: "" });
//       setEditMode(false);
//     } catch (err) {
//       console.error("Error saving employee:", err);
//     }
//   };

//   // ✅ Delete employee
//   const handleDelete = async (id) => {
//     try {
//       await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       fetchEmployees();
//     } catch (err) {
//       console.error("Error deleting employee:", err);
//     }
//   };

//   if (loading) return <p className="p-6">Loading...</p>;
//   if (error) return <p className="p-6 text-red-500">{error}</p>;

//   return (
//     <div className="p-6 space-y-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Employee Management</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex justify-end mb-4">
//             <Dialog open={open} onOpenChange={setOpen}>
//               <DialogTrigger asChild>
//                 <Button onClick={() => { setEditMode(false); setFormData({ id: "", name: "", role: "", productivity: "", status: "" }); }}>
//                   <Plus className="mr-2 h-4 w-4" /> Add Employee
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>{editMode ? "Edit Employee" : "Add Employee"}</DialogTitle>
//                 </DialogHeader>
//                 <div className="space-y-3">
//                   <Input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
//                   <Input name="role" placeholder="Role" value={formData.role} onChange={handleInputChange} />
//                   <Input name="productivity" placeholder="Productivity" value={formData.productivity} onChange={handleInputChange} />
//                   <Input name="status" placeholder="Status" value={formData.status} onChange={handleInputChange} />
//                   <Button onClick={handleSave}>{editMode ? "Update" : "Save"}</Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>

//           <div className="space-y-2">
//             {employees.map((emp) => (
//               <Card key={emp.id} className="p-4 flex justify-between items-center">
//                 <div>
//                   <p className="font-semibold">{emp.name}</p>
//                   <p className="text-sm text-gray-600">{emp.role}</p>
//                 </div>
//                 <div className="flex space-x-2">
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setEditMode(true);
//                       setFormData(emp);
//                       setOpen(true);
//                     }}
//                   >
//                     <Pencil className="h-4 w-4" />
//                   </Button>
//                   <Button variant="destructive" onClick={() => handleDelete(emp.id)}>
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Plus, Search } from "lucide-react";

const API_URL = "http://localhost:8080/api/employees";

export default function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    role: "",
    productivity: "",
    status: "",
  });
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Fetch all employees
  const fetchEmployees = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch employees");
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // ✅ Input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Add or Update employee
  const handleSave = async () => {
    try {
      const payload = {
        name: formData.name,
        role: formData.role,
        productivity: formData.productivity,
        status: formData.status,
      };

      const res = await fetch(
        editMode ? `${API_URL}/${formData.id}` : API_URL,
        {
          method: editMode ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to save employee");

      await fetchEmployees();
      setOpen(false);
      setFormData({ id: "", name: "", role: "", productivity: "", status: "" });
      setEditMode(false);
    } catch (err) {
      console.error("Error saving employee:", err);
      alert("❌ Error saving employee. Check backend.");
    }
  };

  // ✅ Delete employee
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchEmployees();
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6 space-y-6">
      <Card className="shadow-md rounded-2xl">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-2xl font-semibold">
            Employee Directory
          </CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-64"
              />
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    setEditMode(false);
                    setFormData({
                      id: "",
                      name: "",
                      role: "",
                      productivity: "",
                      status: "",
                    });
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" /> Add Employee
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editMode ? "Edit Employee" : "Add Employee"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-3 mt-2">
                  <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="productivity"
                    type="number"
                    placeholder="Productivity (%)"
                    value={formData.productivity}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="status"
                    placeholder="Status (Active / On Leave)"
                    value={formData.status}
                    onChange={handleInputChange}
                  />
                  <Button onClick={handleSave} className="w-full">
                    {editMode ? "Update" : "Save"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>

        <CardContent>
          <div className="mt-4 divide-y">
            {filteredEmployees.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                No employees found
              </p>
            ) : (
              filteredEmployees.map((emp) => (
                <div
                  key={emp.id}
                  className="flex justify-between items-center py-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
                      {emp.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold">{emp.name}</p>
                      <p className="text-sm text-gray-500">{emp.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-10">
                    <div className="w-40">
                      <Progress
                        value={Number(emp.productivity)}
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {emp.productivity}%
                    </span>

                    <Badge
                      variant={
                        emp.status.toLowerCase() === "active"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {emp.status}
                    </Badge>

                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setEditMode(true);
                          setFormData(emp);
                          setOpen(true);
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(emp.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}



