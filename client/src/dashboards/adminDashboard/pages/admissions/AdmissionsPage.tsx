import React, { useState } from "react";
import {
  Plus,
  Search,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Mail,
  Phone,
  Calendar,
  FileText,
  Menu,
} from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface Application {
  id: number;
  name: string;
  email: string;
  phone: string;
  grade: string;
  dateApplied: string;
  status: "pending" | "approved" | "rejected";
  previousSchool: string;
  parentName: string;
  dob: string;
}

const AdmissionsPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const applications: Application[] = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@email.com",
      phone: "+254 712 345 678",
      grade: "Grade 7",
      dateApplied: "Oct 10, 2025",
      status: "pending",
      previousSchool: "Sunrise Primary",
      parentName: "Peter Doe",
      dob: "Jan 15, 2013",
    },
    {
      id: 2,
      name: "Kevin Omondi",
      email: "kevin.omondi@email.com",
      phone: "+254 734 567 890",
      grade: "Grade 8",
      dateApplied: "Oct 12, 2025",
      status: "approved",
      previousSchool: "Valley View Academy",
      parentName: "Lucy Omondi",
      dob: "Mar 22, 2012",
    },
  ];

  const stats = [
    {
      title: "Total Applications",
      value: applications.length,
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Pending Review",
      value: applications.filter((a) => a.status === "pending").length,
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Approved",
      value: applications.filter((a) => a.status === "approved").length,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Rejected",
      value: applications.filter((a) => a.status === "rejected").length,
      icon: XCircle,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-700",
      approved: "bg-green-100 text-green-700",
      rejected: "bg-red-100 text-red-700",
    };
    return variants[status] || variants.pending;
  };

  const getStatusIcon = (status: string) => {
    if (status === "approved") return <CheckCircle className="h-4 w-4" />;
    if (status === "rejected") return <XCircle className="h-4 w-4" />;
    return <Clock className="h-4 w-4" />;
  };

  const filteredApplications =
    selectedStatus === "all"
      ? applications
      : applications.filter((app) => app.status === selectedStatus);

  const handleViewApplication = (application: Application) => {
    setSelectedApplication(application);
    setIsViewDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Menu size={18} /> Admissions
        </h2>
        <nav className="space-y-3">
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800">
            Dashboard
          </button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800">
            Applications
          </button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800">
            Reports
          </button>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 p-6 space-y-6">
        <header className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold">Admissions & Enrollment</h2>
        </header>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card key={i}>
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-full`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex gap-4 flex-wrap">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> New
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Export
            </Button>
          </div>
        </div>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>{app.name}</TableCell>
                    <TableCell>{app.email}</TableCell>
                    <TableCell>{app.grade}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                          app.status
                        )}`}
                      >
                        {getStatusIcon(app.status)}
                        {app.status}
                      </span>
                    </TableCell>
                    <TableCell>{app.dateApplied}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleViewApplication(app)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* View Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>
              View full applicant information
            </DialogDescription>
          </DialogHeader>
          {selectedApplication && (
            <div className="grid grid-cols-2 gap-4 py-4">
              {Object.entries(selectedApplication).map(([key, value]) => (
                <div key={key}>
                  <Label className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </Label>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsViewDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdmissionsPage;
