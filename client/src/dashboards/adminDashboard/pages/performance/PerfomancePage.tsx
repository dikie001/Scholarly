import {
  Award,
  BarChart3,
  CheckCircle,
  Download,
  TrendingUp,
  Search,
} from "lucide-react";
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
import { AdminSideBar } from "../../../../components/shared/SideBar";

const PerformancePage = () => {
  const performanceData = [
    { subject: "Mathematics", avgScore: 78.5, passRate: 85, excellence: 45 },
    { subject: "English", avgScore: 82.3, passRate: 90, excellence: 52 },
    { subject: "Kiswahili", avgScore: 80.1, passRate: 88, excellence: 48 },
    { subject: "Sciences", avgScore: 75.8, passRate: 82, excellence: 40 },
    { subject: "Social Studies", avgScore: 84.2, passRate: 92, excellence: 58 },
  ];

  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        {/* Navbar */}
        <Navbar pageName="Academic Performance" />

        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center justify-between max-sm:flex-col mt-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search subjects..." className="pl-9" />
            </div>

            <div className="flex gap-4 items-center justify-center max-md:mt-3">
              <Button
                variant="outline"
                className="flex items-center gap-2 max-sm:w-full"
              >
                <Download className="h-4 w-4" /> Export Reports
              </Button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                <p className="text-sm text-muted-foreground">
                  Overall Avg Score
                </p>
                <p className="text-2xl font-bold">79.8%</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <p className="text-sm text-muted-foreground">
                  Overall Pass Rate
                </p>
                <p className="text-2xl font-bold">87.4%</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Award className="w-8 h-8 text-yellow-600 mb-3" />
                <p className="text-sm text-muted-foreground">
                  Students with Distinction
                </p>
                <p className="text-2xl font-bold">210</p>
              </CardContent>
            </Card>
          </div>

          {/* Performance Table */}
          <Card className="mt-6">
            <CardHeader className="flex flex-row items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <CardTitle>Performance by Core Subject</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">
                      Average Score (%)
                    </TableHead>
                    <TableHead className="text-center">Pass Rate (%)</TableHead>
                    <TableHead className="text-center">
                      Students with Excellence
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {performanceData.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">
                        {item.subject}
                      </TableCell>
                      <TableCell className="text-center font-semibold">
                        {item.avgScore}
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.passRate >= 85
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.passRate}%
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        {item.excellence}
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

export default PerformancePage;
