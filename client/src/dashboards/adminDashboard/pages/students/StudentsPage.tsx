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
import { Edit, Plus, Search, Trash2, Upload, User } from "lucide-react";
import { AdminSideBar } from "../../../../components/shared/SideBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddStudentModal from "../../modals/addStudentModal";

const Students = () => {
  const navigate = useNavigate();
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);

  const students = [
    {
      id: 1,
      name: "John Kamau",
      admNo: "2023/789",
      grade: "Grade 8A",
      status: "Active",
      fees: "Paid",
      attendance: 92,
    },
    {
      id: 2,
      name: "Mary Akinyi",
      admNo: "2023/790",
      grade: "Grade 7B",
      status: "Active",
      fees: "Partial",
      attendance: 96,
    },
    {
      id: 3,
      name: "David Ochieng",
      admNo: "2024/123",
      grade: "Grade 9C",
      status: "Active",
      fees: "Pending",
      attendance: 88,
    },
    {
      id: 4,
      name: "Grace Wanjiru",
      admNo: "2024/124",
      grade: "Grade 6A",
      status: "Active",
      fees: "Paid",
      attendance: 98,
    },
    {
      id: 5,
      name: "Peter Mutua",
      admNo: "2024/125",
      grade: "Grade 8D",
      status: "Active",
      fees: "Paid",
      attendance: 90,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background max-w-screen flex-wrap w-full">
      <AdminSideBar />

      <div className="flex-1  transition-all duration-300 ease-in-out max-w-full w-full">
        {/* Navbar */}
        <Navbar pageName="Student Management" />
        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center justify-between max-sm:flex-col max-w-screen  mt-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search students..." className="pl-9" />
            </div>

            <div className="flex gap-4 items-center justify-center max-md:mt-3">
              <Button
                onClick={() => setShowAddStudentModal(true)}
                className="flex cursor-pointer dark:text-foreground items-center gap-2 max-sm:w-full"
              >
                <Plus className="h-4 w-4" /> Add Student
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
          <Card className="mt-6 max-w-screen ">
            <CardHeader>
              <CardTitle>Student List</CardTitle>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Adm No</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                    <TableHead className="text-center">Attendance</TableHead>
                    <TableHead className="text-center">Fee Status</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.admNo}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{student.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        {student.grade}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.attendance}%
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            student.fees === "Paid"
                              ? "bg-green-100 text-green-700"
                              : student.fees === "Partial"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {student.fees}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {student.status}
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
        </div>{" "}
        {/* MODALS */}
        {showAddStudentModal && (
          <AddStudentModal
            open={showAddStudentModal}
            onClose={() => setShowAddStudentModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Students;
