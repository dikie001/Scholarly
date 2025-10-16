import Navbar from "@/components/shared/Navbar";
import {
  Activity,
  AlertCircle,
  Bell,
  BookOpen,
  Database,
  DollarSign,
  FileText,
  UserCheck,
  Users
} from "lucide-react";
import { AdminSideBar } from "./SideBar";

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
    {
      label: "Active Classes",
      value: "48",
      color: "bg-blue-50 text-blue-700",
      icon: BookOpen,
    },
    {
      label: "Pending Admissions",
      value: "23",
      color: "bg-yellow-50 text-yellow-700",
      icon: AlertCircle,
    },
    {
      label: "Fee Collection",
      value: "87%",
      color: "bg-green-50 text-green-700",
      icon: DollarSign,
    },
    {
      label: "Staff Present Today",
      value: "82/85",
      color: "bg-purple-50 text-purple-700",
      icon: UserCheck,
    },
  ];

  const recentActivities = [
    {
      type: "student",
      message: "New student admission: Sarah Njoki - Grade 7",
      time: "5 minutes ago",
      icon: Users,
      color: "text-blue-600",
    },
    {
      type: "payment",
      message: "Fee payment received: KSh 45,000 from John Kamau",
      time: "1 hour ago",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      type: "teacher",
      message: "Mr. Omondi submitted Grade 8A reports",
      time: "2 hours ago",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      type: "alert",
      message: "3 students marked absent today",
      time: "3 hours ago",
      icon: AlertCircle,
      color: "text-orange-600",
    },
    {
      type: "system",
      message: "System backup completed successfully",
      time: "5 hours ago",
      icon: Database,
      color: "text-gray-600",
    },
  ];

  const feesSummary = {
    totalExpected: 56250000,
    totalCollected: 45200000,
    totalPending: 11050000,
    collectionRate: 80.4,
    byGrade: [
      { grade: "Grade 9", expected: 12000000, collected: 10500000, rate: 87.5 },
      { grade: "Grade 8", expected: 15000000, collected: 12000000, rate: 80.0 },
      { grade: "Grade 7", expected: 18000000, collected: 14400000, rate: 80.0 },
      { grade: "Grade 6", expected: 11250000, collected: 8300000, rate: 73.8 },
    ],
  };

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
    {
      type: "warning",
      message: "15 students with fees balance > KSh 20,000",
      severity: "high",
    },
    {
      type: "info",
      message: "Parent-Teacher meeting scheduled for Oct 28",
      severity: "medium",
    },
    {
      type: "success",
      message: "All teachers submitted weekly reports",
      severity: "low",
    },
  ];


  return (
    <div className="flex h-screen bg-gray-50 max-w-screen w-full flex-wrap">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full max-w-full ">
        <Navbar pageName="Admin Dashboard"/>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`${stat.color} rounded-xl shadow-sm p-4 border`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className="w-8 h-8 opacity-50" />
                  </div>
                </div>
              ))}
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Recent Activities */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-600" />
                  Recent Activities
                </h3>
                <div className="space-y-3">
                  {recentActivities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <activity.icon
                        className={`w-5 h-5 ${activity.color} mt-0.5`}
                      />
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Pending Actions
                </h3>
                <div className="space-y-3">
                  {pendingActions.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border-l-4 ${
                        item.priority === "high"
                          ? "bg-red-50 border-red-500"
                          : "bg-yellow-50 border-yellow-500"
                      }`}
                    >
                      <p className="text-sm font-medium text-gray-800">
                        {item.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Due: {item.deadline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* System Alerts and Fee Collection Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* System Alerts */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-red-600" />
                  System Alerts
                </h3>
                <div className="space-y-3">
                  {systemAlerts.map((alert, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border-l-4 ${
                        alert.severity === "high"
                          ? "bg-red-50 border-red-500"
                          : alert.severity === "medium"
                          ? "bg-yellow-50 border-yellow-500"
                          : "bg-green-50 border-green-500"
                      }`}
                    >
                      <p className="text-sm text-gray-800">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Collection Overview */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Fee Collection
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Collection Rate
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {feesSummary.collectionRate}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full"
                        style={{ width: `${feesSummary.collectionRate}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Collected</p>
                      <p className="text-lg font-bold text-green-700">
                        KSh {(feesSummary.totalCollected / 1000000).toFixed(1)}M
                      </p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Pending</p>
                      <p className="text-lg font-bold text-orange-700">
                        KSh {(feesSummary.totalPending / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </main>
      </div>
    </div>
  );
}
