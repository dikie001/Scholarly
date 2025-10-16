"use client";

import React from "react";
import {
  Plus,
  Upload,
  Search,
  Edit,
  Trash2,
  Menu,
  UserCheck,
} from "lucide-react";
import { AdminSideBar } from "../../SideBar";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const TeachersPage = () => {
  const { toggleSidebar, setOpen } = useSidebar();

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
    <div className="flex min-h-screen bg-background w-full">
      <AdminSideBar />

      <div className="flex-1 p-4 transition-all duration-300 ease-in-out">
        {/* Header */}
        <header className="flex items-center gap-4 border-b pt-2 pb-4 px-2">
          <Menu
            onClick={() => {
              toggleSidebar();
              setOpen(true);
            }}
            size={18}
            className="cursor-pointer md:hidden"
          />
          <h2 className="text-2xl font-bold tracking-tight">
            Teacher Management
          </h2>
        </header>

        {/* Controls */}
        <div className="flex items-center justify-between max-sm:flex-col max-w-screen w-[95%] mt-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search teachers..." className="pl-9" />
          </div>

          <div className="flex gap-4 items-center justify-center max-md:mt-3">
            <Button className="flex cursor-pointer items-center gap-2 max-sm:w-full">
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
        <Card className="mt-6 max-w-screen w-[95%]">
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
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
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
  );
};

export default TeachersPage;
