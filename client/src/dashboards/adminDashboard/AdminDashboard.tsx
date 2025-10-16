import Navbar from "@/components/shared/Navbar";
import {
  Activity,
  AlertCircle,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Database,
  DollarSign,
  Download,
  Edit,
  FileText,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Trash2,
  TrendingUp,
  Upload,
  User,
  UserCheck,
  Users
} from "lucide-react";
import { useState } from "react";
import { AdminSideBar } from "./SideBar";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

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

  const performanceData = [
    { subject: "Mathematics", avgScore: 78.5, passRate: 85, excellence: 45 },
    { subject: "English", avgScore: 82.3, passRate: 90, excellence: 52 },
    { subject: "Kiswahili", avgScore: 80.1, passRate: 88, excellence: 48 },
    { subject: "Sciences", avgScore: 75.8, passRate: 82, excellence: 40 },
    { subject: "Social Studies", avgScore: 84.2, passRate: 92, excellence: 58 },
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

  const formatCurrency = (amount) => {
    return `KSh ${amount.toLocaleString("en-KE")}`;
  };

  const TabContent = ({ tab }) => {
    switch (tab) {
      case "overview":
        return (
          <div className="space-y-6">
            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          </div>
        );

    

  
      case "fees":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Fees Management
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500">Total Expected</p>
                <p className="text-2xl font-bold text-gray-800">
                  {formatCurrency(feesSummary.totalExpected)}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500">Total Collected</p>
                <p className="text-2xl font-bold text-gray-800">
                  {formatCurrency(feesSummary.totalCollected)}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                <AlertCircle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500">Total Pending</p>
                <p className="text-2xl font-bold text-gray-800">
                  {formatCurrency(feesSummary.totalPending)}
                </p>
              </div>
            </div>

            {/* Fees by Grade Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <h3 className="text-lg font-bold text-gray-800 p-4 border-b flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                Collection Rate by Grade
              </h3>
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">
                      Grade
                    </th>
                    <th className="text-right py-3 px-4 font-bold text-gray-700">
                      Expected
                    </th>
                    <th className="text-right py-3 px-4 font-bold text-gray-700">
                      Collected
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Collection Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feesSummary.byGrade.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {item.grade}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {formatCurrency(item.expected)}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {formatCurrency(item.collected)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.rate >= 80
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.rate}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-5 h-5" />
                <span>Generate Fee Report</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                <Bell className="w-5 h-5" />
                <span>Send Fee Reminders</span>
              </button>
            </div>
          </div>
        );
      case "performance":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Academic Performance
            </h2>

            {/* Overall Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500">Overall Avg Score</p>
                <p className="text-2xl font-bold text-gray-800">79.8%</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500">Overall Pass Rate</p>
                <p className="text-2xl font-bold text-gray-800">87.4%</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                <Award className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  Students with Distinction
                </p>
                <p className="text-2xl font-bold text-gray-800">210</p>
              </div>
            </div>

            {/* Performance by Subject */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <h3 className="text-lg font-bold text-gray-800 p-4 border-b flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                Performance by Core Subject
              </h3>
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">
                      Subject
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Average Score (%)
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Pass Rate (%)
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Students with Excellence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {item.subject}
                      </td>
                      <td className="py-3 px-4 text-center font-bold">
                        {item.avgScore}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.passRate >= 85
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.passRate}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        {item.excellence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5" />
                <span>Export Grade Reports</span>
              </button>
            </div>
          </div>
        );
      case "reports":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Generate Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  label: "Student Enrollment Report",
                  icon: Users,
                  color: "bg-blue-100 text-blue-700",
                  description:
                    "Detailed list of all students and their statuses.",
                },
                {
                  label: "Financial Summary Report",
                  icon: DollarSign,
                  color: "bg-green-100 text-green-700",
                  description:
                    "Comprehensive fee collection and outstanding balances.",
                },
                {
                  label: "Teacher Activity Report",
                  icon: UserCheck,
                  color: "bg-purple-100 text-purple-700",
                  description:
                    "Summary of teacher load, subjects, and class performance.",
                },
                {
                  label: "Attendance Log",
                  icon: Clock,
                  color: "bg-orange-100 text-orange-700",
                  description:
                    "Daily, weekly, and monthly attendance statistics.",
                },
                {
                  label: "Academic Performance Analysis",
                  icon: BarChart3,
                  color: "bg-red-100 text-red-700",
                  description: "Subject and grade wise performance breakdown.",
                },
              ].map((report, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <div
                    className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3 ${report.color}`}
                  >
                    <report.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    {report.label}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {report.description}
                  </p>
                  <button className="flex items-center space-x-2 text-sm text-gray-800 px-3 py-1 border rounded-lg hover:bg-gray-100">
                    <Download className="w-4 h-4" />
                    <span>Generate PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "admissions":

      case "events":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                School Calendar & Events
              </h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                <Plus className="w-5 h-5" />
                <span>Add Event</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Events List */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Upcoming Events
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      date: "Oct 20",
                      event: "Mid-Term Break Begins",
                      type: "Holiday",
                      color: "bg-red-100 text-red-700",
                    },
                    {
                      date: "Oct 28",
                      event: "Parent-Teacher Meeting",
                      type: "Meeting",
                      color: "bg-green-100 text-green-700",
                    },
                    {
                      date: "Nov 5",
                      event: "National Science Fair",
                      type: "Academic",
                      color: "bg-purple-100 text-purple-700",
                    },
                    {
                      date: "Dec 15",
                      event: "End of Year Closing Day",
                      type: "End Term",
                      color: "bg-blue-100 text-blue-700",
                    },
                  ].map((event, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between p-3 border-l-4 border-gray-200 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-gray-800 w-16">
                          {event.date}
                        </span>
                        <p className="text-sm text-gray-800">{event.event}</p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${event.color}`}
                      >
                        {event.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Event Calendar Placeholder */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center justify-center h-full min-h-[300px]">
                <p className="text-gray-400">
                  Interactive Calendar View Placeholder
                </p>
              </div>
            </div>
          </div>
        );
      case "messages":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Communication Center
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Inbox Summary */}
              <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                  Inbox
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">
                      Unread Messages
                    </p>
                    <span className="font-bold text-lg text-blue-700">8</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">Drafts</p>
                    <span className="font-bold text-lg text-gray-700">2</span>
                  </div>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                    <Edit className="w-5 h-5" />
                    <span>Compose New Message</span>
                  </button>
                </div>
              </div>

              {/* Recent Conversations/Broadcasts */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-purple-600" />
                  Recent Broadcasts
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      recipient: "All Parents",
                      subject: "P.T.A Meeting Reminder",
                      date: "Oct 15",
                      status: "Sent",
                    },
                    {
                      recipient: "All Teachers",
                      subject: "New Grading Policy",
                      date: "Oct 14",
                      status: "Sent",
                    },
                    {
                      recipient: "Grade 6 Guardians",
                      subject: "Field Trip Information",
                      date: "Oct 12",
                      status: "Draft",
                    },
                  ].map((msg, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between p-3 border-b hover:bg-gray-50"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {msg.subject}
                        </p>
                        <p className="text-xs text-gray-500">
                          To: {msg.recipient} • {msg.date}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          msg.status === "Sent"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {msg.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              System Settings & Configuration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* General Settings */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-gray-600" />
                  General
                </h3>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-sm text-gray-600">School Name</p>
                  <p className="font-medium text-gray-800">CBC High School</p>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-sm text-gray-600">Current Academic Year</p>
                  <p className="font-medium text-gray-800">2025/2026</p>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Edit Details
                </button>
              </div>

              {/* Database & Security */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-red-600" />
                  Database & Security
                </h3>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-sm text-gray-600">Last Backup</p>
                  <span className="font-medium text-green-600 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> 5 hours ago
                  </span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-sm text-gray-600">User Management</p>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Manage Admins
                  </button>
                </div>
                <button className="text-sm text-red-600 hover:text-red-800 font-medium">
                  Run Manual Backup
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6 text-center text-gray-500">
            <h2 className="text-xl font-bold">Welcome to the Admin Portal!</h2>
            <p className="mt-2">
              Please select a section from the sidebar to begin.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 w-full">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ">
        <Navbar />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <TabContent tab={activeTab} />
        </main>
      </div>
    </div>
  );
}
