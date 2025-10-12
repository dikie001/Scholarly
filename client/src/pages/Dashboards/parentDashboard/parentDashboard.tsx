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
  Download,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

export default function ParentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedChild, setSelectedChild] = useState(0);

  const children = [
    {
      id: 1,
      name: "John Kamau",
      grade: "Grade 8",
      class: "8A",
      admNo: "2023/789",
      avatar: "JK",
      overallGrade: "A-",
      attendance: 92,
      nextClass: "Mathematics - 8:00 AM",
    },
    {
      id: 2,
      name: "Jane Kamau",
      grade: "Grade 6",
      class: "6B",
      admNo: "2025/456",
      avatar: "JK",
      overallGrade: "B+",
      attendance: 95,
      nextClass: "English - 9:00 AM",
    },
  ];

  const currentChild = children[selectedChild];

  const stats = [
    {
      label: "Overall Grade",
      value: currentChild.overallGrade,
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      label: "Attendance",
      value: `${currentChild.attendance}%`,
      icon: CheckCircle,
      color: "bg-blue-500",
    },
    {
      label: "Pending Fees",
      value: "KSh 15,000",
      icon: DollarSign,
      color: "bg-orange-500",
    },
    {
      label: "Unread Messages",
      value: "3",
      icon: MessageSquare,
      color: "bg-purple-500",
    },
  ];

  const subjects = [
    {
      name: "Mathematics",
      grade: "A",
      marks: 85,
      teacher: "Mr. Omondi",
      competency: "Excellent",
      trend: "up",
    },
    {
      name: "English",
      grade: "B+",
      marks: 78,
      teacher: "Mrs. Wanjiru",
      competency: "Very Good",
      trend: "stable",
    },
    {
      name: "Kiswahili",
      grade: "A-",
      marks: 82,
      teacher: "Mr. Kamau",
      competency: "Excellent",
      trend: "up",
    },
    {
      name: "Sciences",
      grade: "B",
      marks: 75,
      teacher: "Mrs. Njeri",
      competency: "Good",
      trend: "down",
    },
    {
      name: "Social Studies",
      grade: "A",
      marks: 88,
      teacher: "Mr. Mwangi",
      competency: "Excellent",
      trend: "up",
    },
    {
      name: "PE & Health",
      grade: "A",
      marks: 90,
      teacher: "Coach Otieno",
      competency: "Excellent",
      trend: "stable",
    },
  ];

  const recentActivity = [
    {
      type: "grade",
      message: "New grade posted: Mathematics Quiz - 85/100",
      time: "2 hours ago",
      icon: Award,
      color: "text-green-600",
    },
    {
      type: "assignment",
      message: "Assignment due tomorrow: English Composition",
      time: "5 hours ago",
      icon: AlertCircle,
      color: "text-orange-600",
    },
    {
      type: "attendance",
      message: "Marked present for all classes today",
      time: "1 day ago",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      type: "message",
      message: "New message from Mr. Omondi (Mathematics)",
      time: "2 days ago",
      icon: MessageSquare,
      color: "text-purple-600",
    },
  ];

  const upcomingEvents = [
    {
      title: "Parent-Teacher Meeting",
      date: "2025-10-28",
      time: "2:00 PM",
      location: "Main Hall",
    },
    {
      title: "Mid-Term Break Begins",
      date: "2025-11-01",
      time: "All Day",
      location: "School Closed",
    },
    {
      title: "Sports Day",
      date: "2025-11-15",
      time: "8:00 AM",
      location: "School Field",
    },
  ];

  const assignments = [
    {
      title: "Mathematics Quiz - Algebra",
      subject: "Mathematics",
      dueDate: "2025-10-16",
      status: "pending",
      priority: "high",
    },
    {
      title: "English Composition Essay",
      subject: "English",
      dueDate: "2025-10-18",
      status: "pending",
      priority: "high",
    },
    {
      title: "Science Project - Ecosystems",
      subject: "Sciences",
      dueDate: "2025-10-20",
      status: "submitted",
      priority: "medium",
    },
    {
      title: "Social Studies Report",
      subject: "Social Studies",
      dueDate: "2025-10-14",
      status: "graded",
      priority: "low",
    },
  ];

  const attendanceHistory = [
    { date: "2025-10-11", status: "present", classes: 5 },
    { date: "2025-10-10", status: "present", classes: 5 },
    { date: "2025-10-09", status: "late", classes: 5 },
    { date: "2025-10-08", status: "present", classes: 5 },
    { date: "2025-10-07", status: "absent", classes: 5, reason: "Sick" },
  ];

  const feesData = {
    totalFees: 45000,
    paid: 30000,
    balance: 15000,
    dueDate: "2025-11-15",
    transactions: [
      {
        date: "2025-09-01",
        amount: 15000,
        type: "Payment",
        method: "M-PESA",
        reference: "QK2X3Y4Z",
      },
      {
        date: "2025-09-20",
        amount: 15000,
        type: "Payment",
        method: "Bank Transfer",
        reference: "BNK789456",
      },
    ],
  };

  const teachers = [
    {
      name: "Mr. Omondi",
      subject: "Mathematics",
      email: "omondi@school.ac.ke",
      phone: "+254 712 345 678",
    },
    {
      name: "Mrs. Wanjiru",
      subject: "English",
      email: "wanjiru@school.ac.ke",
      phone: "+254 723 456 789",
    },
    {
      name: "Mr. Kamau",
      subject: "Kiswahili",
      email: "kamau@school.ac.ke",
      phone: "+254 734 567 890",
    },
    {
      name: "Mrs. Njeri",
      subject: "Sciences",
      email: "njeri@school.ac.ke",
      phone: "+254 745 678 901",
    },
  ];

  const messages = [
    {
      from: "Mr. Omondi",
      subject: "Mathematics Progress Update",
      preview: "John is doing exceptionally well in algebra...",
      time: "2 hours ago",
      unread: true,
    },
    {
      from: "School Admin",
      subject: "Fee Payment Reminder",
      preview: "This is a reminder that school fees balance...",
      time: "1 day ago",
      unread: true,
    },
    {
      from: "Mrs. Wanjiru",
      subject: "English Assignment",
      preview: "Please ensure John submits his composition...",
      time: "3 days ago",
      unread: false,
    },
  ];

  const competencies = [
    { name: "Critical Thinking", level: 85, color: "bg-blue-500" },
    { name: "Communication", level: 78, color: "bg-green-500" },
    { name: "Creativity", level: 90, color: "bg-purple-500" },
    { name: "Collaboration", level: 82, color: "bg-orange-500" },
    { name: "Digital Literacy", level: 88, color: "bg-cyan-500" },
    { name: "Citizenship", level: 92, color: "bg-pink-500" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-purple-600 to-purple-700 shadow-xl transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-6 border-b border-purple-500">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">Parent Portal</span>
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
            { id: "children", label: "My Children", icon: Users },
            { id: "academic", label: "Academic Progress", icon: Award },
            { id: "assignments", label: "Assignments", icon: FileText },
            { id: "attendance", label: "Attendance", icon: Clock },
            { id: "fees", label: "School Fees", icon: DollarSign },
            { id: "teachers", label: "Teachers", icon: User },
            { id: "messages", label: "Messages", icon: MessageSquare },
            { id: "events", label: "Events", icon: Calendar },
            { id: "reports", label: "Reports", icon: Download },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-white text-purple-700"
                  : "text-purple-50 hover:bg-purple-500"
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
                  Welcome, Mr. & Mrs. Kamau!
                </h1>
                <p className="text-sm text-gray-500">
                  Parent Portal • {children.length}{" "}
                  {children.length === 1 ? "Child" : "Children"} Enrolled
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 p-2">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <LogOut className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Child Selector */}
          {children.length > 1 && (
            <div className="px-6 pb-4">
              <div className="flex space-x-3">
                {children.map((child, idx) => (
                  <button
                    key={child.id}
                    onClick={() => setSelectedChild(idx)}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedChild === idx
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 bg-white hover:border-purple-300"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        selectedChild === idx ? "bg-purple-600" : "bg-gray-400"
                      }`}
                    >
                      {child.avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">{child.name}</p>
                      <p className="text-xs text-gray-500">
                        {child.grade} • {child.class}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
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

              {/* Quick Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, idx) => (
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

                {/* Upcoming Events */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Upcoming Events
                  </h3>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600"
                      >
                        <div className="bg-blue-600 text-white px-3 py-2 rounded text-center min-w-max">
                          <p className="text-xs font-medium">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                            })}
                          </p>
                          <p className="text-lg font-bold">
                            {new Date(event.date).getDate()}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {event.title}
                          </p>
                          <p className="text-sm text-gray-600">{event.time}</p>
                          <p className="text-xs text-gray-500">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pending Items and Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pending Assignments */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-orange-600" />
                    Pending Assignments
                  </h3>
                  <div className="space-y-3">
                    {assignments
                      .filter((a) => a.status === "pending")
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
                              {assignment.subject}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-700">
                              {assignment.dueDate}
                            </p>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                assignment.priority === "high"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {assignment.priority} priority
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Fee Summary */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                    Fee Status
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Fees</p>
                      <p className="text-2xl font-bold text-gray-800">
                        KSh {feesData.totalFees.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Balance</p>
                      <p className="text-2xl font-bold text-orange-600">
                        KSh {feesData.balance.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full"
                        style={{
                          width: `${
                            (feesData.paid / feesData.totalFees) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Due: {feesData.dueDate}
                    </p>
                    <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "children" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">My Children</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {children.map((child, idx) => (
                  <div
                    key={child.id}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-purple-600">
                          {child.avatar}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          {child.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {child.grade} • Class {child.class}
                        </p>
                        <p className="text-sm text-gray-500">
                          Adm No: {child.admNo}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedChild(idx)}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm"
                      >
                        View Details
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">
                          Overall Grade
                        </p>
                        <p className="text-2xl font-bold text-green-700">
                          {child.overallGrade}
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Attendance</p>
                        <p className="text-2xl font-bold text-blue-700">
                          {child.attendance}%
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-gray-600">Next Class</p>
                      <p className="text-sm font-medium text-gray-800">
                        {child.nextClass}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "academic" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Academic Progress - {currentChild.name}
              </h2>

              {/* Overall Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Overall Grade</p>
                  <p className="text-4xl font-bold text-green-700">
                    {currentChild.overallGrade}
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Mean Score</p>
                  <p className="text-4xl font-bold text-gray-800">82.3%</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Class Rank</p>
                  <p className="text-4xl font-bold text-blue-700">5/40</p>
                </div>
              </div>

              {/* Subjects */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    Subject Performance
                  </h3>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Subject
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Marks
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Grade
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Competency
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Trend
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Teacher
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">
                          {subject.name}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center">
                            <span className="font-bold text-gray-800 mr-2">
                              {subject.marks}
                            </span>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-600 h-2 rounded-full"
                                style={{ width: `${subject.marks}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                            {subject.grade}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          {subject.competency}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              subject.trend === "up"
                                ? "bg-green-100 text-green-700"
                                : subject.trend === "down"
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {subject.trend === "up"
                              ? "↑"
                              : subject.trend === "down"
                              ? "↓"
                              : "→"}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {subject.teacher}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CBC Competencies */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  CBC Core Competencies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {competencies.map((comp, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {comp.name}
                        </span>
                        <span className="text-sm font-bold text-gray-800">
                          {comp.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${comp.color} h-3 rounded-full transition-all`}
                          style={{ width: `${comp.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "assignments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  Assignments - {currentChild.name}
                </h2>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                    All
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm">
                    Pending
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm">
                    Completed
                  </button>
                </div>
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
                              assignment.status === "graded"
                                ? "bg-green-100 text-green-700"
                                : assignment.status === "submitted"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {assignment.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {assignment.subject} • Due: {assignment.dueDate}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        {assignment.status === "graded" ? (
                          <span className="text-2xl font-bold text-green-600">
                            28/30
                          </span>
                        ) : assignment.status === "submitted" ? (
                          <span className="text-sm text-blue-600 font-medium">
                            Awaiting Grade
                          </span>
                        ) : (
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              assignment.priority === "high"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {assignment.priority} priority
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "attendance" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Attendance Record - {currentChild.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Total Present</p>
                  <p className="text-4xl font-bold text-green-600">19</p>
                  <p className="text-xs text-gray-500 mt-1">days this term</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Total Absent</p>
                  <p className="text-4xl font-bold text-red-600">1</p>
                  <p className="text-xs text-gray-500 mt-1">day this term</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Late Arrivals</p>
                  <p className="text-4xl font-bold text-yellow-600">1</p>
                  <p className="text-xs text-gray-500 mt-1">day this term</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Attendance Rate</p>
                  <p className="text-4xl font-bold text-blue-600">
                    {currentChild.attendance}%
                  </p>
                </div>
              </div>

              {/* Recent Attendance */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    Recent Attendance
                  </h3>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Date
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Status
                      </th>
                      <th className="text-center py-3 px-4 font-bold text-gray-700">
                        Classes
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceHistory.map((record, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{record.date}</td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              record.status === "present"
                                ? "bg-green-100 text-green-700"
                                : record.status === "absent"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {record.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center font-medium">
                          {record.classes}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {record.reason || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "fees" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                School Fees - {currentChild.name}
              </h2>

              {/* Fee Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Total Fees</p>
                  <p className="text-3xl font-bold text-gray-800">
                    KSh {feesData.totalFees.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Amount Paid</p>
                  <p className="text-3xl font-bold text-green-600">
                    KSh {feesData.paid.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Balance</p>
                  <p className="text-3xl font-bold text-orange-600">
                    KSh {feesData.balance.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Due: {feesData.dueDate}
                  </p>
                </div>
              </div>

              {/* Payment Progress */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Payment Progress
                </h3>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-600">
                    Paid:{" "}
                    {((feesData.paid / feesData.totalFees) * 100).toFixed(0)}%
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    KSh {feesData.paid.toLocaleString()} / KSh{" "}
                    {feesData.totalFees.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div
                    className="bg-green-600 h-4 rounded-full"
                    style={{
                      width: `${(feesData.paid / feesData.totalFees) * 100}%`,
                    }}
                  ></div>
                </div>
                <button className="w-full md:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium flex items-center justify-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Make Payment</span>
                </button>
              </div>

              {/* Payment History */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    Payment History
                  </h3>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Method
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Reference
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feesData.transactions.map((transaction, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{transaction.date}</td>
                        <td className="py-3 px-4 font-bold text-green-600">
                          KSh {transaction.amount.toLocaleString()}
                        </td>
                        <td className="py-3 px-4">{transaction.method}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {transaction.reference}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            Confirmed
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "teachers" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Teachers - {currentChild.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachers.map((teacher, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800">
                          {teacher.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {teacher.subject}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{teacher.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{teacher.phone}</span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Send Message
                    </button>
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
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="divide-y max-h-96 overflow-y-auto">
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`p-4 hover:bg-gray-50 cursor-pointer ${
                          msg.unread ? "bg-purple-50" : ""
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-medium text-gray-800">
                                {msg.from}
                              </p>
                              {msg.unread && (
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                              )}
                            </div>
                            <p className="text-sm font-medium text-gray-700 mb-1">
                              {msg.subject}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {msg.preview}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message View */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-96">
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Mr. Omondi</p>
                        <p className="text-sm text-gray-500">
                          Mathematics Teacher
                        </p>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-800">
                      Mathematics Progress Update
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-gray-800 mb-4">
                        Dear Mr. and Mrs. Kamau,
                      </p>
                      <p className="text-gray-800 mb-4">
                        I wanted to update you on John's progress in
                        Mathematics. He is doing exceptionally well in algebra
                        and has shown great improvement in problem-solving
                        skills. His recent quiz score of 85/100 demonstrates his
                        strong grasp of the concepts.
                      </p>
                      <p className="text-gray-800 mb-4">
                        I encourage him to continue practicing regularly,
                        especially on word problems. Please feel free to reach
                        out if you have any questions.
                      </p>
                      <p className="text-gray-800">
                        Best regards,
                        <br />
                        Mr. Omondi
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border-t">
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                School Events & Calendar
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming Events */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600"
                      >
                        <div className="bg-purple-600 text-white px-3 py-2 rounded text-center min-w-max">
                          <p className="text-xs font-medium">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                            })}
                          </p>
                          <p className="text-xl font-bold">
                            {new Date(event.date).getDate()}
                          </p>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-800">
                            {event.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {event.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Dates */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Important Dates
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Term 3 Ends",
                        date: "2025-11-28",
                        type: "academic",
                      },
                      {
                        title: "Fee Payment Deadline",
                        date: "2025-11-15",
                        type: "fees",
                      },
                      {
                        title: "Report Cards Release",
                        date: "2025-11-30",
                        type: "academic",
                      },
                      {
                        title: "Term 1 2026 Begins",
                        date: "2026-01-06",
                        type: "academic",
                      },
                    ].map((date, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-800">
                            {date.title}
                          </p>
                          <p className="text-sm text-gray-600">{date.date}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            date.type === "fees"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {date.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  Reports & Documents
                </h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  <Download className="w-5 h-5" />
                  <span>Download All</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Term 3 Report Card",
                    date: "2025-10-10",
                    type: "Report Card",
                    icon: Award,
                  },
                  {
                    title: "Attendance Summary",
                    date: "2025-10-01",
                    type: "Attendance",
                    icon: Clock,
                  },
                  {
                    title: "Fee Statement",
                    date: "2025-09-28",
                    type: "Financial",
                    icon: DollarSign,
                  },
                  {
                    title: "CBC Competencies Report",
                    date: "2025-09-25",
                    type: "Competencies",
                    icon: TrendingUp,
                  },
                  {
                    title: "Mid-Term Assessment",
                    date: "2025-09-15",
                    type: "Assessment",
                    icon: FileText,
                  },
                  {
                    title: "Behavior Report",
                    date: "2025-09-10",
                    type: "Conduct",
                    icon: CheckCircle,
                  },
                ].map((report, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <report.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="text-xs text-gray-500">
                        {report.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {report.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{report.type}</p>
                    <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
