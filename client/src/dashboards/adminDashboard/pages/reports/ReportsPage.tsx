import {
  BarChart3,
  Clock,
  DollarSign,
  Download,
  UserCheck,
  Users,
} from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AdminSideBar } from "../../../../components/shared/SideBar";
import { Search } from "lucide-react";

const ReportsPage = () => {
  const reports = [
    {
      label: "Student Enrollment Report",
      icon: Users,
      color: "bg-blue-100 text-blue-700",
      description: "Detailed list of all students and their statuses.",
    },
    {
      label: "Financial Summary Report",
      icon: DollarSign,
      color: "bg-green-100 text-green-700",
      description: "Comprehensive fee collection and outstanding balances.",
    },
    {
      label: "Teacher Activity Report",
      icon: UserCheck,
      color: "bg-purple-100 text-purple-700",
      description: "Summary of teacher load, subjects, and class performance.",
    },
    {
      label: "Attendance Log",
      icon: Clock,
      color: "bg-orange-100 text-orange-700",
      description: "Daily, weekly, and monthly attendance statistics.",
    },
    {
      label: "Academic Performance Analysis",
      icon: BarChart3,
      color: "bg-red-100 text-red-700",
      description: "Subject and grade wise performance breakdown.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        {/* Navbar */}
        <Navbar pageName="Reports Center" />

        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center justify-between max-sm:flex-col mt-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search reports..." className="pl-9" />
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {reports.map((report, idx) => (
              <Card key={idx} className="border">
                <CardHeader>
                  <div
                    className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3 ${report.color}`}
                  >
                    <report.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{report.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {report.description}
                  </p>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Generate PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
