import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  Award,
  FileText,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  Clock,
  TrendingUp,
  MessageSquare,
  DollarSign,
  Users,
  Home,
  Settings,
  BarChart3,
  UserCheck,
  Plus,
  Search,
  Edit,
  Trash2,
  Download,
  Upload,
  AlertCircle,
  CheckCircle,
  XCircle,
  Database,
  Shield,
  Activity,
} from "lucide-react";

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

  const students = [
    {
      id: 1,
      name: "John Kamau",
      admNo: "2023/789",
      grade: "Grade 8A",
      status: "active",
      fees: "Paid",
      attendance: 92,
    },
    {
      id: 2,
      name: "Mary Akinyi",
      admNo: "2023/790",
      grade: "Grade 7B",
      status: "active",
      fees: "Partial",
      attendance: 96,
    },
    {
      id: 3,
      name: "David Ochieng",
      admNo: "2024/123",
      grade: "Grade 9C",
      status: "active",
      fees: "Pending",
      attendance: 88,
    },
    {
      id: 4,
      name: "Grace Wanjiru",
      admNo: "2024/124",
      grade: "Grade 6A",
      status: "active",
      fees: "Paid",
      attendance: 98,
    },
    {
      id: 5,
      name: "Peter Mutua",
      admNo: "2024/125",
      grade: "Grade 8D",
      status: "active",
      fees: "Paid",
      attendance: 90,
    },
  ];

  const teachers = [
    {
      id: 1,
      name: "Mr. Omondi",
      subject: "Mathematics",
      staffId: "TCH/2020/045",
      classes: 4,
      students: 120,
      status: "active",
    },
    {
      id: 2,
      name: "Mrs. Wanjiru",
      subject: "English",
      staffId: "TCH/2019/032",
      classes: 5,
      students: 145,
      status: "active",
    },
    {
      id: 3,
      name: "Mr. Kamau",
      subject: "Kiswahili",
      staffId: "TCH/2021/056",
      classes: 4,
      students: 115,
      status: "active",
    },
    {
      id: 4,
      name: "Mrs. Njeri",
      subject: "Sciences",
      staffId: "TCH/2020/048",
      classes: 3,
      students: 90,
      status: "active",
    },
    {
      id: 5,
      name: "Mr. Mwangi",
      subject: "Social Studies",
      staffId: "TCH/2022/067",
      classes: 3,
      students: 95,
      status: "active",
    },
  ];

  const classes = [
    {
      id: 1,
      name: "Grade 8A",
      students: 35,
      teacher: "Multiple",
      capacity: 40,
      performance: 82,
    },
    {
      id: 2,
      name: "Grade 7B",
      students: 30,
      teacher: "Multiple",
      capacity: 40,
      performance: 85,
    },
    {
      id: 3,
      name: "Grade 9C",
      students: 28,
      teacher: "Multiple",
      capacity: 40,
      performance: 78,
    },
    {
      id: 4,
      name: "Grade 6A",
      students: 32,
      teacher: "Multiple",
      capacity: 40,
      performance: 88,
    },
    {
      id: 5,
      name: "Grade 8D",
      students: 27,
      teacher: "Multiple",
      capacity: 40,
      performance: 90,
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      case "students":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Student Management
              </h2>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                  <Plus className="w-5 h-5" />
                  <span>Add Student</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Upload className="w-5 h-5" />
                  <span>Import</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2">
                  <tr>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">
                      Adm No
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">
                      Student Name
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Grade/Class
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Attendance
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Fee Status
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Status
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-600">
                        {student.admNo}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-800">
                            {student.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-sm">
                        {student.grade}
                      </td>
                      <td className="py-3 px-4 text-center font-medium">
                        {student.attendance}%
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            student.fees === "Paid"
                              ? "bg-green-100 text-green-700"
                              : student.fees === "Partial"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {student.fees}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {student.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="p-2 hover:bg-gray-100 rounded">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "teachers":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Teacher Management
              </h2>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search teachers..."
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                  <Plus className="w-5 h-5" />
                  <span>Add Teacher</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2">
                  <tr>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">
                      Staff ID
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">
                      Teacher Name
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">
                      Subject
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Classes
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Students
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Status
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-600">
                        {teacher.staffId}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <UserCheck className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="font-medium text-gray-800">
                            {teacher.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{teacher.subject}</td>
                      <td className="py-3 px-4 text-center font-medium">
                        {teacher.classes}
                      </td>
                      <td className="py-3 px-4 text-center font-medium">
                        {teacher.students}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {teacher.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="p-2 hover:bg-gray-100 rounded">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "classes":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Class Management
              </h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                <Plus className="w-5 h-5" />
                <span>Add Class</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((cls, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-800">
                      {cls.name}
                    </h4>
                    <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Teacher: <span className="font-medium">{cls.teacher}</span>
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Students:</span>
                      <span className="font-medium">
                        {cls.students} / {cls.capacity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        Capacity Utilization:
                      </span>
                      <span className="font-medium">
                        {((cls.students / cls.capacity) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Avg Performance:</span>
                      <span className="font-medium text-green-600">
                        {cls.performance}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      View Details
                    </button>
                    <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "attendance":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Attendance Overview
            </h2>

            {/* Overall Attendance */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-600" />
                  Today's School Attendance
                </h3>
                <span className="text-2xl font-extrabold text-blue-600">
                  {stats[3].value}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Total students: {stats[0].value}
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-green-700">1178</p>
                  <p className="text-sm text-gray-600">Present</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-red-700">67</p>
                  <p className="text-sm text-gray-600">Absent</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-700">10</p>
                  <p className="text-sm text-gray-600">Late</p>
                </div>
              </div>
            </div>

            {/* Attendance by Grade */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <h3 className="text-lg font-bold text-gray-800 p-4 border-b flex items-center">
                <Users className="w-5 h-5 mr-2 text-gray-600" />
                Attendance by Grade
              </h3>
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">
                      Grade
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Total Students
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Present
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Absent
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Late
                    </th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">
                      Rate (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceSummary.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {item.grade}
                      </td>
                      <td className="py-3 px-4 text-center">{item.total}</td>
                      <td className="py-3 px-4 text-center text-green-600">
                        {item.present}
                      </td>
                      <td className="py-3 px-4 text-center text-red-600">
                        {item.absent}
                      </td>
                      <td className="py-3 px-4 text-center text-yellow-600">
                        {item.late}
                      </td>
                      <td className="py-3 px-4 text-center font-bold">
                        {item.rate}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Admissions & Enrollment
            </h2>

            {/* Pending Admissions Quick View */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
                Pending Applications ({quickStats[1].value})
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center p-2 bg-yellow-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-800">
                    Jane Doe - Grade 7
                  </span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">
                    Review
                  </button>
                </li>
                <li className="flex justify-between items-center p-2 bg-yellow-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-800">
                    Samwel Njoroge - Grade 8
                  </span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">
                    Review
                  </button>
                </li>
                <li className="text-center pt-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View All Pending
                  </button>
                </li>
              </ul>
            </div>

            {/* Admission Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors">
                <Plus className="w-8 h-8 mb-2" />
                <span className="text-lg font-bold">
                  New Online Application
                </span>
                <span className="text-sm opacity-80">
                  Process a fresh enrollment
                </span>
              </button>
              <button className="flex flex-col items-center p-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                <Search className="w-8 h-8 mb-2" />
                <span className="text-lg font-bold">
                  Check Enrollment Status
                </span>
                <span className="text-sm opacity-80">
                  Track existing applications
                </span>
              </button>
            </div>
          </div>
        );
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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">Admin Portal</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "overview", label: "Dashboard", icon: Home },
            { id: "students", label: "Students", icon: Users },
            { id: "teachers", label: "Teachers", icon: UserCheck },
            { id: "classes", label: "Classes", icon: BookOpen },
            { id: "attendance", label: "Attendance", icon: Clock },
            { id: "fees", label: "Fees Management", icon: DollarSign },
            { id: "performance", label: "Performance", icon: BarChart3 },
            { id: "reports", label: "Reports", icon: FileText },
            { id: "admissions", label: "Admissions", icon: Plus },
            { id: "events", label: "Events", icon: Calendar },
            { id: "messages", label: "Messages", icon: MessageSquare },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false); // Close sidebar on mobile after selection
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-white text-gray-900"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User/Logout at the bottom */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-sm font-medium text-white">Admin User</span>
            </div>
            <button className="p-2 hover:bg-gray-700 rounded-full text-gray-300">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-500">
                  School Management System • Admin ID: ADM001
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 p-2">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <TabContent tab={activeTab} />
        </main>
      </div>
    </div>
  );
}
