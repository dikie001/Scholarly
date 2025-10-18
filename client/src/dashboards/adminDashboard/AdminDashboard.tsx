import Navbar from "@/components/shared/Navbar";
import { AdminSideBar } from "../../components/shared/SideBar";
import {
  Activity,
  AlertCircle,
  Bell,
  BookOpen,
  Database,
  DollarSign,
  FileText,
  UserCheck,
  Users,
} from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Students",
      value: "1,245",
      change: "+12",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Total Teachers",
      value: "85",
      change: "+3",
      icon: UserCheck,
      color: "bg-green-500",
    },
    {
      label: "Total Revenue",
      value: "KSh 45.2M",
      change: "+8%",
      icon: DollarSign,
      color: "bg-purple-500",
    },
    {
      label: "Avg Attendance",
      value: "94.5%",
      change: "+2%",
      icon: Activity,
      color: "bg-orange-500",
    },
  ];

  const quickStats = [
    { label: "Active Classes", value: "48", icon: BookOpen },
    { label: "Pending Admissions", value: "23", icon: AlertCircle },
    { label: "Fee Collection", value: "87%", icon: DollarSign },
    { label: "Staff Present Today", value: "82/85", icon: UserCheck },
  ];

  const recentActivities = [
    {
      message: "New student admission: Sarah Njoki - Grade 7",
      time: "5 minutes ago",
      icon: Users,
      color: "text-blue-400",
    },
    {
      message: "Fee payment received: KSh 45,000 from John Kamau",
      time: "1 hour ago",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      message: "Mr. Omondi submitted Grade 8A reports",
      time: "2 hours ago",
      icon: FileText,
      color: "text-purple-400",
    },
    {
      message: "3 students marked absent today",
      time: "3 hours ago",
      icon: AlertCircle,
      color: "text-orange-400",
    },
    {
      message: "System backup completed successfully",
      time: "5 hours ago",
      icon: Database,
      color: "text-gray-400",
    },
  ];

  const pendingActions = [
    { action: "Approve 5 leave requests", priority: "high", deadline: "Today" },
    {
      action: "Review 12 new admission applications",
      priority: "high",
      deadline: "Tomorrow",
    },
    {
      action: "Sign off on Term 3 timetable",
      priority: "medium",
      deadline: "Oct 18",
    },
    { action: "Budget approval for Q4", priority: "high", deadline: "Oct 20" },
  ];

  const systemAlerts = [
    { message: "15 students with fees balance > KSh 20,000", severity: "high" },
    {
      message: "Parent-Teacher meeting scheduled for Oct 28",
      severity: "medium",
    },
    { message: "All teachers submitted weekly reports", severity: "low" },
  ];

  const feesSummary = {
    collectionRate: 80.4,
    totalCollected: 45200000,
    totalPending: 11050000,
  };

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <AdminSideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar pageName="Admin Dashboard" />
        <main className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <Card key={idx} className="bg-card text-card-foreground">
                <CardHeader className="flex items-center justify-between">
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary">{stat.change}</Badge>
                </CardHeader>
                <CardContent>
                  <CardTitle>{stat.label}</CardTitle>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, idx) => (
              <Card key={idx} className="bg-card text-card-foreground p-4">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>{stat.label}</CardTitle>
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className="w-8 h-8 opacity-50" />
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Recent Activities & Pending Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="lg:col-span-2 bg-card text-card-foreground p-4">
              <CardHeader className="flex items-center mb-2">
                <Activity className="w-5 h-5 mr-2 text-blue-400" />
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {recentActivities.map((act, idx) => (
                  <Card
                    key={idx}
                    className="p-2 bg-muted text-muted-foreground"
                  >
                    <div className="flex items-start space-x-2">
                      <act.icon className={`w-5 h-5 ${act.color} mt-1`} />
                      <div>
                        <p className="text-sm">{act.message}</p>
                        <p className="text-xs text-muted-foreground">
                          {act.time}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground p-4">
              <CardHeader className="flex items-center mb-2">
                <AlertCircle className="w-5 h-5 mr-2 text-orange-400" />
                <CardTitle>Pending Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {pendingActions.map((item, idx) => (
                  <Card
                    key={idx}
                    className={`p-2 border-l-4 ${
                      item.priority === "high"
                        ? "border-red-500 bg-destructive/10"
                        : "border-yellow-500 bg-warning/10"
                    }`}
                  >
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-muted-foreground">
                      Due: {item.deadline}
                    </p>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* System Alerts & Fee Collection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="bg-card text-card-foreground p-4">
              <CardHeader className="flex items-center mb-2">
                <Bell className="w-5 h-5 mr-2 text-red-400" />
                <CardTitle>System Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {systemAlerts.map((alert, idx) => (
                  <Card
                    key={idx}
                    className={`p-2 border-l-4 ${
                      alert.severity === "high"
                        ? "border-red-500 bg-destructive/10"
                        : alert.severity === "medium"
                        ? "border-yellow-500 bg-warning/10"
                        : "border-green-500 bg-success/10"
                    }`}
                  >
                    <p className="text-sm">{alert.message}</p>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground p-4">
              <CardHeader className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                <CardTitle>Fee Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">Collection Rate</p>
                <Progress value={feesSummary.collectionRate} />
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-xs">Collected</p>
                    <p className="font-bold">
                      {(feesSummary.totalCollected / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <div>
                    <p className="text-xs">Pending</p>
                    <p className="font-bold">
                      {(feesSummary.totalPending / 1000000).toFixed(1)}M
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
