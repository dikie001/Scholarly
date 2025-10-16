import React, { useState } from "react";
import {
  Plus,
  Search,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Menu,
  Upload,
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

interface Application {
  id: number;
  name: string;
  email: string;
  grade: string;
  dateApplied: string;
  status: "pending" | "approved" | "rejected";
}

const AdmissionsPage: React.FC = () => {
  const { toggleSidebar, setOpen } = useSidebar();
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const applications: Application[] = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@email.com",
      grade: "Grade 7",
      dateApplied: "Oct 10, 2025",
      status: "pending",
    },
    {
      id: 2,
      name: "Kevin Omondi",
      email: "kevin.omondi@email.com",
      grade: "Grade 8",
      dateApplied: "Oct 12, 2025",
      status: "approved",
    },
  ];

  const stats = [
    {
      title: "Total Applications",
      value: applications.length,
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Pending Review",
      value: applications.filter((a) => a.status === "pending").length,
      icon: Clock,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      title: "Approved",
      value: applications.filter((a) => a.status === "approved").length,
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Rejected",
      value: applications.filter((a) => a.status === "rejected").length,
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-100",
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

  const filteredApps =
    selectedStatus === "all"
      ? applications
      : applications.filter((a) => a.status === selectedStatus);

  const handleView = (app: Application) => {
    setSelectedApplication(app);
    setIsViewDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-background  max-w-screen w-full  overflow-hidden  flex-wrap">
      <AdminSideBar />
      <div className="flex-1 p-2 transition-all duration-300 ease-in-out max-w-full w-full overflow-auto">
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
            Admissions & Enrollment
          </h2>
        </header>

        {/* Stats */}
        <div className="grid gap-4 grid-cols-2  lg:grid-cols-4 mt-6 w-full px-2">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card key={i} className="w-full">
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <div className={`${stat.bg} p-3 rounded-full`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex max-md:flex-col items-center justify-between gap-4 w-full mt-6 px-2">
          <div className="flex  gap-3 w-full sm:w-auto">
            <div className="relative flex-1 min-w-[200px] sm:min-w-[240px]">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search applicants..."
                className="pl-9 w-full"
              />
            </div>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full sm:w-44">
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

          <div className="flex gap-3 justify-center items-center ">
            <Button className="flex items-center gap-2 max-md:w-[96%]">
              <Plus className="h-4 w-4" /> New Admission
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 max-md:w-[96%]"
            >
              <Upload className="h-4 w-4" /> Export
            </Button>
          </div>
        </div>

        {/* Table */}
        <Card className="mt-6 max-w-screen  px-2">
          <CardHeader>
            <CardTitle>Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table >
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Applied</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApps.map((app) => (
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
                          {app.status === "approved" && (
                            <CheckCircle className="h-4 w-4" />
                          )}
                          {app.status === "pending" && (
                            <Clock className="h-4 w-4" />
                          )}
                          {app.status === "rejected" && (
                            <XCircle className="h-4 w-4" />
                          )}
                          {app.status}
                        </span>
                      </TableCell>
                      <TableCell>{app.dateApplied}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleView(app)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Applicant Details</DialogTitle>
              <DialogDescription>Full admission info</DialogDescription>
            </DialogHeader>
            {selectedApplication && (
              <div className="grid grid-cols-2 gap-4 py-4">
                <div>
                  <Label>Name</Label>
                  <p>{selectedApplication.name}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p>{selectedApplication.email}</p>
                </div>
                <div>
                  <Label>Grade</Label>
                  <p>{selectedApplication.grade}</p>
                </div>
                <div>
                  <Label>Status</Label>
                  <p className="capitalize">{selectedApplication.status}</p>
                </div>
                <div>
                  <Label>Date Applied</Label>
                  <p>{selectedApplication.dateApplied}</p>
                </div>
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
    </div>
  );
};

export default AdmissionsPage;
