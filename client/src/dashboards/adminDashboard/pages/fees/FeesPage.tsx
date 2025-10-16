import {
  AlertCircle,
  Bell,
  CheckCircle,
  DollarSign,
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
import { AdminSideBar } from "../../SideBar";

const FeesPage = () => {
  const formatCurrency = (amount: number) => {
    return `KSh ${amount.toLocaleString("en-KE")}`;
  };

  const feesSummary = {
    totalExpected: 56250000,
    totalCollected: 45200000,
    totalPending: 11050000,
    collectionRate: 80.4,
    byGrade: [
      {
        grade: "Grade 9",
        expected: 12000000,
        collected: 10500000,
        rate: 87.5,
      },
      {
        grade: "Grade 8",
        expected: 15000000,
        collected: 12000000,
        rate: 80.0,
      },
      {
        grade: "Grade 7",
        expected: 18000000,
        collected: 14400000,
        rate: 80.0,
      },
      {
        grade: "Grade 6",
        expected: 11250000,
        collected: 8300000,
        rate: 73.8,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        {/* Navbar */}
        <Navbar pageName="Fees Management" />

        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center justify-between max-sm:flex-col mt-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search fees..." className="pl-9" />
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Total Expected</p>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(feesSummary.totalExpected)}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Total Collected</p>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(feesSummary.totalCollected)}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <AlertCircle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Total Pending</p>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(feesSummary.totalPending)}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fees by Grade */}
          <Card className="mt-6">
            <CardHeader className="flex items-center gap-2 border-b">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <CardTitle>Collection Rate by Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Grade</TableHead>
                    <TableHead className="text-right">Expected</TableHead>
                    <TableHead className="text-right">Collected</TableHead>
                    <TableHead className="text-center">Rate (%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feesSummary.byGrade.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{item.grade}</TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(item.expected)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(item.collected)}
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.rate >= 80
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.rate}%
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-5 h-5" />
              Generate Fee Report
            </Button>
            <Button className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white">
              <Bell className="w-5 h-5" />
              Send Fee Reminders
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;
