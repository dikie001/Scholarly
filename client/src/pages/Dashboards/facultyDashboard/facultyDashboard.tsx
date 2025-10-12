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
  Users,
  Home,
  BookMarked,
  ClipboardList,
  BarChart3,
  Settings,
  UserCheck,
  Download,
  Plus,
  Edit,
  Search,
} from "lucide-react";

export default function FacultyDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      label: "Total Students",
      value: "120",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Classes Teaching",
      value: "4",
      icon: BookMarked,
      color: "bg-green-500",
    },
    {
      label: "Pending Grading",
      value: "28",
      icon: ClipboardList,
      color: "bg-orange-500",
    },
    {
      label: "Attendance Rate",
      value: "94%",
      icon: UserCheck,
      color: "bg-purple-500",
    },
  ];

  const classes = [
    {
      name: "Grade 8A - Mathematics",
      students: 35,
      schedule: "Mon, Wed, Fri - 8:00 AM",
      room: "Room 201",
      avgGrade: "B+",
      attendance: 92,
    },
    {
      name: "Grade 7B - Mathematics",
      students: 30,
      schedule: "Tue, Thu - 9:00 AM",
      room: "Room 202",
      avgGrade: "A-",
      attendance: 95,
    },
    {
      name: "Grade 9C - Mathematics",
      students: 28,
      schedule: "Mon, Wed - 10:00 AM",
      room: "Room 201",
      avgGrade: "B",
      attendance: 89,
    },
    {
      name: "Grade 8D - Mathematics",
      students: 27,
      schedule: "Tue, Fri - 11:00 AM",
      room: "Room 203",
      avgGrade: "A",
      attendance: 96,
    },
  ];

  const students = [
    {
      id: 1,
      name: "John Kamau",
      grade: 8,
      class: "Grade 8A",
      avgScore: 82,
      attendance: 92,
      lastAssignment: 85,
      behavior: "Excellent",
    },
    {
      id: 2,
      name: "Mary Akinyi",
      grade: 8,
      class: "Grade 8A",
      avgScore: 88,
      attendance: 96,
      lastAssignment: 90,
      behavior: "Excellent",
    },
    {
      id: 3,
      name: "David Ochieng",
      grade: 7,
      class: "Grade 7B",
      avgScore: 75,
      attendance: 88,
      lastAssignment: 78,
      behavior: "Good",
    },
    {
      id: 4,
      name: "Grace Wanjiru",
      grade: 9,
      class: "Grade 9C",
      avgScore: 91,
      attendance: 98,
      lastAssignment: 95,
      behavior: "Excellent",
    },
    {
      id: 5,
      name: "Peter Mutua",
      grade: 8,
      class: "Grade 8D",
      avgScore: 79,
      attendance: 90,
      lastAssignment: 82,
      behavior: "Very Good",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Algebra Quiz - Chapter 5",
      class: "Grade 8A",
      dueDate: "2025-10-16",
      submitted: 28,
      total: 35,
      graded: 15,
      status: "active",
    },
    {
      id: 2,
      title: "Geometry Project",
      class: "Grade 7B",
      dueDate: "2025-10-18",
      submitted: 30,
      total: 30,
      graded: 30,
      status: "completed",
    },
    {
      id: 3,
      title: "Calculus Assessment",
      class: "Grade 9C",
      dueDate: "2025-10-20",
      submitted: 20,
      total: 28,
      graded: 10,
      status: "active",
    },
    {
      id: 4,
      title: "Statistics Worksheet",
      class: "Grade 8D",
      dueDate: "2025-10-22",
      submitted: 12,
      total: 27,
      graded: 0,
      status: "active",
    },
  ];

  const todaySchedule = [
    {
      time: "08:00 - 09:00",
      class: "Grade 8A - Mathematics",
      room: "Room 201",
      topic: "Algebraic Equations",
    },
    {
      time: "09:00 - 10:00",
      class: "Grade 7B - Mathematics",
      room: "Room 202",
      topic: "Geometry Basics",
    },
    {
      time: "10:30 - 11:30",
      class: "Grade 9C - Mathematics",
      room: "Room 201",
      topic: "Calculus Introduction",
    },
    {
      time: "11:30 - 12:30",
      class: "Grade 8D - Mathematics",
      room: "Room 203",
      topic: "Statistics & Probability",
    },
  ];

  const recentMessages = [
    {
      from: "John Kamau",
      preview: "Sir, I need help with question 5...",
      time: "2 hours ago",
      unread: true,
    },
    {
      from: "Parent - Mary Akinyi",
      preview: "Thank you for the progress update...",
      time: "5 hours ago",
      unread: false,
    },
    {
      from: "David Ochieng",
      preview: "Can I submit my assignment late?",
      time: "1 day ago",
      unread: true,
    },
  ];

  const notifications = [
    {
      message: "Grade 8A Quiz results need to be submitted by Oct 18",
      type: "warning",
      time: "1 hour ago",
    },
    {
      message: "Staff meeting scheduled for Oct 15 at 2:00 PM",
      type: "info",
      time: "3 hours ago",
    },
    {
      message: "New curriculum updates available in the portal",
      type: "info",
      time: "1 day ago",
    },
  ];

  const performanceData = [
    { subject: "Grade 8A", avgScore: 78, improved: 5, declined: 2, stable: 28 },
    { subject: "Grade 7B", avgScore: 82, improved: 8, declined: 1, stable: 21 },
    { subject: "Grade 9C", avgScore: 75, improved: 4, declined: 3, stable: 21 },
    {
      subject: "Grade 8D",
      avgScore: 85,
      improved: 10,
      declined: 0,
      stable: 17,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-blue-700 shadow-xl transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-6 border-b border-blue-500">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">Teacher Portal</span>
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
            { id: "classes", label: "My Classes", icon: BookMarked },
            { id: "students", label: "Students", icon: Users },
            { id: "assignments", label: "Assignments", icon: FileText },
            { id: "grading", label: "Grading", icon: ClipboardList },
            { id: "attendance", label: "Attendance", icon: UserCheck },
            { id: "schedule", label: "Schedule", icon: Calendar },
            { id: "performance", label: "Performance", icon: BarChart3 },
            { id: "messages", label: "Messages", icon: MessageSquare },
            { id: "reports", label: "Reports", icon: Award },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-white text-blue-700"
                  : "text-blue-50 hover:bg-blue-500"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
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
                  Welcome, Mr. Omondi!
                </h1>
                <p className="text-sm text-gray-500">
                  Mathematics Teacher • Staff ID: TCH/2023/045
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 p-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <LogOut className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-gray-800">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Overview Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Today's Schedule */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Today's Schedule
                  </h3>
                  <div className="space-y-3">
                    {todaySchedule.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600"
                      >
                        <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium min-w-max">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">
                            {item.class}
                          </p>
                          <p className="text-sm text-gray-600">{item.topic}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.room}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pending Tasks */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <ClipboardList className="w-5 h-5 mr-2 text-orange-600" />
                    Pending Grading
                  </h3>
                  <div className="space-y-3">
                    {assignments
                      .filter(
                        (a) => a.status === "active" && a.graded < a.submitted
                      )
                      .slice(0, 3)
                      .map((assignment, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {assignment.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              {assignment.class}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-gray-800">
                              {assignment.submitted - assignment.graded}
                            </p>
                            <p className="text-xs text-gray-500">to grade</p>
                          </div>
                        </div>
                      ))}
                    <button className="w-full mt-2 text-blue-600 text-sm font-medium hover:text-blue-700">
                      View All →
                    </button>
                  </div>
                </div>
              </div>

              {/* Notifications and Messages */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Messages */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
                    Recent Messages
                  </h3>
                  <div className="space-y-3">
                    {recentMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start space-x-3 p-4 rounded-lg border ${
                          msg.unread
                            ? "bg-blue-50 border-blue-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-800">
                              {msg.from}
                            </p>
                            {msg.unread && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {msg.preview}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-orange-600" />
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    {notifications.map((notif, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border-l-4 ${
                          notif.type === "warning"
                            ? "bg-orange-50 border-orange-500"
                            : "bg-blue-50 border-blue-500"
                        }`}
                      >
                        <p className="text-sm text-gray-800">{notif.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notif.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "classes" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">My Classes</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="w-5 h-5" />
                  <span>Add Class</span>
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {classes.map((cls, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {cls.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {cls.schedule}
                        </p>
                        <p className="text-sm text-gray-500">{cls.room}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {cls.students} students
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Avg Grade</p>
                        <p className="text-xl font-bold text-gray-800">
                          {cls.avgGrade}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Attendance</p>
                        <p className="text-xl font-bold text-green-600">
                          {cls.attendance}%
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "students" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  All Students
                </h2>
                <div className="flex space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Classes</option>
                    <option>Grade 8A</option>
                    <option>Grade 7B</option>
                    <option>Grade 9C</option>
                  </select>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2">
                    <tr>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Student Name
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Grade
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Class
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Avg Score
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Attendance
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Last Assignment
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
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
                        <td className="py-3 px-4 text-center">
                          {student.grade}
                        </td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600">
                          {student.class}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                            {student.avgScore}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center font-medium">
                          {student.attendance}%
                        </td>
                        <td className="py-3 px-4 text-center font-medium">
                          {student.lastAssignment}/100
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                            View Profile
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "assignments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  Assignments & Projects
                </h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="w-5 h-5" />
                  <span>Create Assignment</span>
                </button>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                {assignments.map((assignment, idx) => (
                  <div
                    key={idx}
                    className={`p-6 ${
                      idx !== assignments.length - 1 ? "border-b" : ""
                    } hover:bg-gray-50 transition-colors`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-800">
                            {assignment.title}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              assignment.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {assignment.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {assignment.class} • Due: {assignment.dueDate}
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                          <div>
                            <span className="text-gray-600">Submitted: </span>
                            <span className="font-bold text-gray-800">
                              {assignment.submitted}/{assignment.total}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Graded: </span>
                            <span className="font-bold text-green-600">
                              {assignment.graded}/{assignment.submitted}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-600 h-2 rounded-full"
                                style={{
                                  width: `${
                                    (assignment.graded / assignment.submitted) *
                                    100
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                          Grade
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "grading" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Grading Center
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Pending Grading</p>
                  <p className="text-4xl font-bold text-orange-600">28</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Graded This Week</p>
                  <p className="text-4xl font-bold text-green-600">45</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Class Average</p>
                  <p className="text-4xl font-bold text-blue-600">80%</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Recent Submissions
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      student: "John Kamau",
                      assignment: "Algebra Quiz",
                      submitted: "2 hours ago",
                      class: "Grade 8A",
                    },
                    {
                      student: "Mary Akinyi",
                      assignment: "Geometry Project",
                      submitted: "5 hours ago",
                      class: "Grade 8A",
                    },
                    {
                      student: "Grace Wanjiru",
                      assignment: "Calculus Assessment",
                      submitted: "1 day ago",
                      class: "Grade 9C",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.student}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.assignment} • {item.class}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Submitted {item.submitted}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                        Grade Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "attendance" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  Attendance Management
                </h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <UserCheck className="w-5 h-5" />
                  <span>Take Attendance</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Today's Present</p>
                  <p className="text-4xl font-bold text-green-600">108</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Today's Absent</p>
                  <p className="text-4xl font-bold text-red-600">7</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Late Arrivals</p>
                  <p className="text-4xl font-bold text-yellow-600">5</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Attendance Rate</p>
                  <p className="text-4xl font-bold text-blue-600">94%</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    Attendance by Class
                  </h3>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Class
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
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((cls, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{cls.name}</td>
                        <td className="py-3 px-4 text-center">
                          {cls.students}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            {Math.floor((cls.students * cls.attendance) / 100)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                            {cls.students -
                              Math.floor((cls.students * cls.attendance) / 100)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                            {Math.floor(Math.random() * 3)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center font-bold text-gray-800">
                          {cls.attendance}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Weekly Teaching Schedule
              </h2>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="space-y-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                    (day) => (
                      <div key={day} className="border-b pb-4 last:border-b-0">
                        <h3 className="font-bold text-lg text-blue-700 mb-3">
                          {day}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {todaySchedule.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                            >
                              <div className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium min-w-max">
                                {item.time}
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">
                                  {item.class}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {item.topic}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {item.room}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Class Performance Analytics
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {performanceData.map((data, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      {data.subject}
                    </h3>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">
                          Average Score
                        </span>
                        <span className="text-2xl font-bold text-gray-800">
                          {data.avgScore}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full"
                          style={{ width: `${data.avgScore}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">
                          {data.improved}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Improved</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-600">
                          {data.stable}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Stable</p>
                      </div>
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <p className="text-2xl font-bold text-red-600">
                          {data.declined}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Declined</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "messages" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Message List */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-4 border-b">
                    <input
                      type="text"
                      placeholder="Search messages..."
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="divide-y">
                    {[
                      "John Kamau",
                      "Parent - Mary Akinyi",
                      "David Ochieng",
                      "Parent - Grace Wanjiru",
                    ].map((person, idx) => (
                      <div
                        key={idx}
                        className="p-4 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">
                              {person}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              Last message preview...
                            </p>
                          </div>
                          {idx < 2 && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message View */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-96">
                  <div className="p-4 border-b flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">John Kamau</p>
                      <p className="text-sm text-gray-500">Grade 8A Student</p>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                          <p className="text-sm text-gray-800">
                            Sir, I need help with question 5 from the homework.
                          </p>
                          <p className="text-xs text-gray-500 mt-1">2:30 PM</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white p-3 rounded-lg shadow-sm max-w-xs">
                          <p className="text-sm">
                            Sure, I'll help you during the next class. Bring
                            your notebook.
                          </p>
                          <p className="text-xs text-blue-100 mt-1">2:35 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  Reports & Analytics
                </h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Download className="w-5 h-5" />
                  <span>Export Reports</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Term Report Cards",
                    desc: "Generate comprehensive term reports",
                    icon: Award,
                    color: "bg-green-500",
                  },
                  {
                    title: "Attendance Reports",
                    desc: "View detailed attendance statistics",
                    icon: UserCheck,
                    color: "bg-blue-500",
                  },
                  {
                    title: "Performance Analysis",
                    desc: "Analyze student performance trends",
                    icon: BarChart3,
                    color: "bg-purple-500",
                  },
                  {
                    title: "Class Summary",
                    desc: "Overview of all classes",
                    icon: BookMarked,
                    color: "bg-orange-500",
                  },
                  {
                    title: "CBC Competencies",
                    desc: "Track competency development",
                    icon: TrendingUp,
                    color: "bg-pink-500",
                  },
                  {
                    title: "Assignment Reports",
                    desc: "Summary of all assignments",
                    icon: FileText,
                    color: "bg-cyan-500",
                  },
                ].map((report, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div
                      className={`${report.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <report.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {report.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{report.desc}</p>
                    <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
                      Generate Report
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Recent Reports
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      name: "Term 3 Grade 8A Report",
                      date: "2025-10-10",
                      type: "Performance Report",
                    },
                    {
                      name: "September Attendance Summary",
                      date: "2025-10-01",
                      type: "Attendance Report",
                    },
                    {
                      name: "Mid-term Assessment Analysis",
                      date: "2025-09-25",
                      type: "Assessment Report",
                    },
                  ].map((report, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {report.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {report.type} • {report.date}
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 text-sm">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
