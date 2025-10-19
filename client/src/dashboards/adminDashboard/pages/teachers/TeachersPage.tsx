"use client";

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
import { Edit, Plus, Search, Trash2, Upload, UserCheck } from "lucide-react";
import { AdminSideBar } from "../../../../components/shared/SideBar";
import { useNavigate } from "react-router-dom";

const TeachersPage = () => {
  const navigate = useNavigate();

  const teachers = [
    {
      id: 1,
      name: "Mr. Omondi",
      subject: "Mathematics",
      staffId: "TCH/2020/045",
      classes: 4,
      students: 120,
      status: "Active",
    },
    {
      id: 2,
      name: "Mrs. Wanjiru",
      subject: "English",
      staffId: "TCH/2019/032",
      classes: 5,
      students: 145,
      status: "Active",
    },
    {
      id: 3,
      name: "Mr. Kamau",
      subject: "Kiswahili",
      staffId: "TCH/2021/056",
      classes: 4,
      students: 115,
      status: "Active",
    },
    {
      id: 4,
      name: "Mrs. Njeri",
      subject: "Sciences",
      staffId: "TCH/2020/048",
      classes: 3,
      students: 90,
      status: "Active",
    },
    {
      id: 5,
      name: "Mr. Mwangi",
      subject: "Social Studies",
      staffId: "TCH/2022/067",
      classes: 3,
      students: 95,
      status: "Active",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-wrap">
      <AdminSideBar />

      <div className="flex-1  transition-all w-full max-w-full duration-300 ease-in-out">
        {/* NAvbar */}
        <Navbar pageName="Teacher Management" />

        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center justify-between max-sm:flex-col max-w-screen  mt-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search teachers..." className="pl-9" />
            </div>

            <div className="flex gap-4 items-center justify-center max-md:mt-3">
              <Button
                onClick={() => navigate("/admin/addTeacher")}
                className="flex dark:text-white cursor-pointer items-center gap-2 max-sm:w-full"
              >
                <Plus className="h-4 w-4" /> Add Teacher
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
              <CardTitle>Teacher List</CardTitle>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Staff ID</TableHead>
                    <TableHead>Teacher Name</TableHead>
                    <TableHead className="text-center">Subject</TableHead>
                    <TableHead className="text-center">Classes</TableHead>
                    <TableHead className="text-center">Students</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.id}>
                      <TableCell>{teacher.staffId}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                            <UserCheck className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{teacher.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        {teacher.subject}
                      </TableCell>
                      <TableCell className="text-center">
                        {teacher.classes}
                      </TableCell>
                      <TableCell className="text-center">
                        {teacher.students}
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 dark:text-green-300 text-green-700 rounded-full text-xs font-medium">
                          {teacher.status}
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
    </div>
  );
};

export default TeachersPage;
