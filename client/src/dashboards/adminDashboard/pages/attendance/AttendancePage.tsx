import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Clock,
  Edit,
  Menu,
  Search,
  Trash2,
  UserCheck
} from "lucide-react";
import { AdminSideBar } from "../../SideBar";

const AttendancePage = () => {
  const { toggleSidebar, setOpen } = useSidebar();

  const attendanceSummary = [
    {
      grade: "Grade 9",
      total: 280,
      present: 265,
      absent: 12,
      late: 3,
      rate: 94.6,
    },
    {
      grade: "Grade 8",
      total: 320,
      present: 305,
      absent: 10,
      late: 5,
      rate: 95.3,
    },
    {
      grade: "Grade 7",
      total: 350,
      present: 330,
      absent: 15,
      late: 5,
      rate: 94.3,
    },
    {
      grade: "Grade 6",
      total: 295,
      present: 280,
      absent: 10,
      late: 5,
      rate: 94.9,
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
            Attendance Management
          </h2>
        </header>

        {/* Controls */}
        <div className="flex items-center justify-between max-sm:flex-col w-[95%] mt-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search grades..." className="pl-9" />
          </div>
          <div className="flex gap-4 items-center justify-center max-md:mt-3">
            <Button className="flex cursor-pointer items-center gap-2 max-sm:w-full">
              <Clock className="h-4 w-4" /> Mark Attendance
            </Button>
            <Button
              variant="outline"
              className="flex items-center cursor-pointer gap-2 max-sm:w-full"
            >
              <UserCheck className="h-4 w-4" /> View Reports
            </Button>
          </div>
        </div>

        {/* Attendance Table */}
        <Card className="mt-6 w-[95%]">
          <CardHeader>
            <CardTitle>Attendance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Grade</TableHead>
                  <TableHead className="text-center">Total</TableHead>
                  <TableHead className="text-center text-green-600">
                    Present
                  </TableHead>
                  <TableHead className="text-center text-red-600">
                    Absent
                  </TableHead>
                  <TableHead className="text-center text-yellow-600">
                    Late
                  </TableHead>
                  <TableHead className="text-center">Rate (%)</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceSummary.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{item.grade}</TableCell>
                    <TableCell className="text-center">{item.total}</TableCell>
                    <TableCell className="text-center text-green-600">
                      {item.present}
                    </TableCell>
                    <TableCell className="text-center text-red-600">
                      {item.absent}
                    </TableCell>
                    <TableCell className="text-center text-yellow-600">
                      {item.late}
                    </TableCell>
                    <TableCell className="text-center font-medium">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.rate >= 95
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.rate}%
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

export default AttendancePage;
