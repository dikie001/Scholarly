import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, Search, Trash2, Upload } from "lucide-react";
import { AdminSideBar } from "../../SideBar";
import { useState } from "react";
import AddClassModal from "../../modals/addClass.modal";

const ClassesPage = () => {
  const [showAddClassModal, setShowAddClassModal] = useState(false);

  const classes = [
    {
      id: 1,
      name: "Grade 8A",
      students: 35,
      teacher: "Multiple",
      capacity: 40,
      performance: 82,
    },
    {
      id: 2,
      name: "Grade 7B",
      students: 30,
      teacher: "Multiple",
      capacity: 40,
      performance: 85,
    },
    {
      id: 3,
      name: "Grade 9C",
      students: 28,
      teacher: "Multiple",
      capacity: 40,
      performance: 78,
    },
    {
      id: 4,
      name: "Grade 6A",
      students: 32,
      teacher: "Multiple",
      capacity: 40,
      performance: 88,
    },
    {
      id: 5,
      name: "Grade 8D",
      students: 27,
      teacher: "Multiple",
      capacity: 40,
      performance: 90,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background max-w-screen flex-wrap w-full">
      <AdminSideBar />
      <div className="flex-1  transition-all duration-300 ease-in-out max-w-full w-full">
        <Navbar pageName="Class Management" />
        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center justify-between max-sm:flex-col  max-w-screen  mt-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search classes..." className="pl-9" />
            </div>
            {/* Add, Import */}
            <div className="flex gap-4  items-center justify-center max-md:mt-3 ">
              <Button onClick={()=>setShowAddClassModal(true)} className="flex dark:text-foreground cursor-pointer items-center gap-2 max-sm:w-full">
                <Plus className="h-4 w-4" /> Add Class
              </Button>
              <Button
                variant="outline"
                className="flex items-center cursor-pointer gap-2 max-sm:w-full"
              >
                <Upload className="h-4 w-4" /> Import
              </Button>
            </div>
          </div>

          {/* Table */}
          <Card className="mt-6 max-w-screen">
            <CardHeader>
              <CardTitle>Class List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class Name</TableHead>
                    <TableHead className="text-center">Teacher</TableHead>
                    <TableHead className="text-center">Students</TableHead>
                    <TableHead className="text-center">Capacity</TableHead>
                    <TableHead className="text-center">Performance</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classes.map((cls) => (
                    <TableRow key={cls.id}>
                      <TableCell>{cls.name}</TableCell>
                      <TableCell className="text-center">
                        <Button variant="link" className="cursor-pointer">
                          View
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        {cls.students}
                      </TableCell>
                      <TableCell className="text-center">
                        {cls.capacity}
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cls.performance >= 85
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {cls.performance}%
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* MODALS */}
      {showAddClassModal && <AddClassModal/>}
    </div>
  );
};

export default ClassesPage;
