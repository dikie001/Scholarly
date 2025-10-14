import {
    Award,
    Bell,
    Book,
    BookOpen,
    Calendar,
    CheckCircle,
    Clock,
    DollarSign,
    FileText,
    Home,
    LogOut,
    Menu,
    MessageSquare,
    Target,
    TrendingUp,
    User,
    Users,
    X
} from "lucide-react";
import { useState } from "react";

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      label: "Overall Grade",
      value: "A-",
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      label: "Attendance",
      value: "92%",
      icon: CheckCircle,
      color: "bg-blue-500",
    },
    {
      label: "Assignments Done",
      value: "18/22",
      icon: Target,
      color: "bg-purple-500",
    },
    {
      label: "Term Progress",
      value: "65%",
      icon: Calendar,
      color: "bg-orange-500",
    },
  ];

  const subjects = [
    {
      name: "Mathematics",
      grade: "A",
      marks: 85,
      teacher: "Mr. Omondi",
      competency: "Excellent",
    },
    {
      name: "English",
      grade: "B+",
      marks: 78,
      teacher: "Mrs. Wanjiru",
      competency: "Very Good",
    },
    {
      name: "Kiswahili",
      grade: "A-",
      marks: 82,
      teacher: "Mr. Kamau",
      competency: "Excellent",
    },
    {
      name: "Sciences",
      grade: "B",
      marks: 75,
      teacher: "Mrs. Njeri",
      competency: "Good",
    },
    {
      name: "Social Studies",
      grade: "A",
      marks: 88,
      teacher: "Mr. Mwangi",
      competency: "Excellent",
    },
    {
      name: "PE & Health",
      grade: "A",
      marks: 90,
      teacher: "Coach Otieno",
      competency: "Excellent",
    },
    {
      name: "Creative Arts",
      grade: "B+",
      marks: 80,
      teacher: "Ms. Akinyi",
      competency: "Very Good",
    },
  ];

  const assignments = [
    {
      title: "Mathematics Quiz - Algebra",
      subject: "Mathematics",
      dueDate: "2025-10-16",
      status: "pending",
      marks: "-/20",
    },
    {
      title: "English Composition Essay",
      subject: "English",
      dueDate: "2025-10-18",
      status: "pending",
      marks: "-/30",
    },
    {
      title: "Science Project - Ecosystems",
      subject: "Sciences",
      dueDate: "2025-10-20",
      status: "submitted",
      marks: "25/30",
    },
    {
      title: "Social Studies Report",
      subject: "Social Studies",
      dueDate: "2025-10-14",
      status: "graded",
      marks: "28/30",
    },
  ];

  const timetable = [
    {
      day: "Monday",
      time: "08:00 - 09:00",
      subject: "Mathematics",
      room: "Class 3A",
    },
    {
      day: "Monday",
      time: "09:00 - 10:00",
      subject: "English",
      room: "Class 3A",
    },
    {
      day: "Monday",
      time: "10:30 - 11:30",
      subject: "Kiswahili",
      room: "Class 3A",
    },
    {
      day: "Monday",
      time: "11:30 - 12:30",
      subject: "Sciences",
      room: "Lab 1",
    },
    {
      day: "Tuesday",
      time: "08:00 - 09:00",
      subject: "Social Studies",
      room: "Class 3A",
    },
    {
      day: "Tuesday",
      time: "09:00 - 10:00",
      subject: "Mathematics",
      room: "Class 3A",
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

  const notifications = [
    {
      message: "New assignment posted in Mathematics",
      time: "2 hours ago",
      type: "info",
    },
    {
      message: "Term 3 report cards will be available on Oct 25",
      time: "1 day ago",
      type: "warning",
    },
    {
      message: "Parent-Teacher meeting scheduled for Oct 28",
      time: "2 days ago",
      type: "info",
    },
  ];

  const attendance = [
    { week: "Week 1", present: 5, absent: 0, late: 0, total: 5 },
    { week: "Week 2", present: 4, absent: 1, late: 0, total: 5 },
    { week: "Week 3", present: 5, absent: 0, late: 1, total: 5 },
    { week: "Week 4", present: 5, absent: 0, late: 0, total: 5 },
  ];

  const feesData = {
    totalFees: 45000,
    paid: 30000,
    balance: 15000,
    dueDate: "2025-11-15",
    transactions: [
      { date: "2025-09-01", amount: 15000, type: "Payment", method: "M-PESA" },
      {
        date: "2025-09-20",
        amount: 15000,
        type: "Payment",
        method: "Bank Transfer",
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-50 w-full">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-green-600 to-green-700 shadow-xl transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-6 border-b border-green-500">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">CBC Portal</span>
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
            { id: "subjects", label: "My Subjects", icon: Book },
            { id: "assignments", label: "Assignments", icon: FileText },
            { id: "timetable", label: "Timetable", icon: Calendar },
            { id: "grades", label: "Report Card", icon: Award },
            { id: "competencies", label: "Competencies", icon: Target },
            { id: "attendance", label: "Attendance", icon: Clock },
            { id: "fees", label: "School Fees", icon: DollarSign },
            { id: "teachers", label: "Teachers", icon: Users },
            { id: "messages", label: "Messages", icon: MessageSquare },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-white text-green-700"
                  : "text-green-50 hover:bg-green-500"
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
                  Welcome back, John Kamau!
                </h1>
                <p className="text-sm text-gray-500">
                  Grade 8 - Junior Secondary • Adm No: 2023/789
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 p-2">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
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

              {/* Quick Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pending Assignments */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-green-600" />
                    Pending Assignments
                  </h3>
                  <div className="space-y-3">
                    {assignments
                      .filter((a) => a.status === "pending")
                      .map((assignment, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-500"
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
                            <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700">
                              Due Soon
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Today's Timetable */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Today's Classes
                  </h3>
                  <div className="space-y-3">
                    {timetable
                      .filter((t) => t.day === "Monday")
                      .slice(0, 4)
                      .map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg"
                        >
                          <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium min-w-max">
                            {item.time}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">
                              {item.subject}
                            </p>
                            <p className="text-sm text-gray-500">{item.room}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity and Notifications */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Notifications */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-orange-600" />
                    Important Notices
                  </h3>
                  <div className="space-y-3">
                    {notifications.map((notif, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-4 border-l-4 border-green-500 bg-green-50 rounded"
                      >
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium">
                            {notif.message}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {notif.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CBC Core Competencies Progress */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-600" />
                    Competencies
                  </h3>
                  <div className="space-y-3">
                    {competencies.slice(0, 3).map((comp, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            {comp.name}
                          </span>
                          <span className="text-sm font-bold text-gray-800">
                            {comp.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${comp.color} h-2 rounded-full`}
                            style={{ width: `${comp.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                    <button className="w-full mt-2 text-green-600 text-sm font-medium hover:text-green-700">
                      View All →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "subjects" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                My Subjects - Term 3, 2025
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {subjects.map((subject, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {subject.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Teacher: {subject.teacher}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-lg font-bold">
                        {subject.grade}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Current Marks</span>
                        <span className="font-bold text-gray-800 text-lg">
                          {subject.marks}/100
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Competency Level</span>
                        <span className="font-medium text-green-600">
                          {subject.competency}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                        <div
                          className="bg-green-600 h-3 rounded-full"
                          style={{ width: `${subject.marks}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "assignments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  Assignments & Projects
                </h2>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    All
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    Pending
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    Graded
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
                        <h3 className="text-lg font-bold text-gray-800">
                          {assignment.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {assignment.subject}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Due: {assignment.dueDate}
                        </p>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              assignment.status === "graded"
                                ? "bg-green-100 text-green-700"
                                : assignment.status === "submitted"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {assignment.status}
                          </span>
                          <span className="font-bold text-gray-800">
                            {assignment.marks}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "timetable" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Weekly Timetable
              </h2>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="space-y-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                    (day) => (
                      <div key={day} className="border-b pb-4 last:border-b-0">
                        <h3 className="font-bold text-lg text-green-700 mb-3">
                          {day}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {timetable
                            .filter((t) => t.day === day)
                            .map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg"
                              >
                                <div className="bg-green-600 text-white px-3 py-2 rounded text-sm font-medium min-w-max">
                                  {item.time}
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">
                                    {item.subject}
                                  </p>
                                  <p className="text-sm text-gray-500">
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

          {activeTab === "grades" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Term 3 Report Card - 2025
              </h2>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="mb-6 p-4 bg-green-50 rounded-lg">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Overall Grade</p>
                      <p className="text-2xl font-bold text-green-700">A-</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Mean Score</p>
                      <p className="text-2xl font-bold text-gray-800">82.3%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Class Rank</p>
                      <p className="text-2xl font-bold text-gray-800">5/40</p>
                    </div>
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
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
                        <td className="py-3 px-4 text-center font-bold">
                          {subject.marks}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                            {subject.grade}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          {subject.competency}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {subject.teacher}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Class Teacher's Comment:
                  </p>
                  <p className="text-gray-800">
                    John has shown excellent progress this term. His
                    participation in class discussions is commendable, and he
                    demonstrates strong problem-solving skills. Keep up the good
                    work!
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "competencies" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                CBC Core Competencies Assessment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">
                        {comp.name}
                      </h3>
                      <span className="text-2xl font-bold text-gray-800">
                        {comp.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                      <div
                        className={`${comp.color} h-4 rounded-full transition-all duration-500`}
                        style={{ width: `${comp.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {comp.level >= 85
                        ? "Outstanding performance. Keep excelling!"
                        : comp.level >= 70
                        ? "Good progress. Continue working hard!"
                        : "Developing well. Practice more to improve."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "attendance" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Attendance Record - Term 3
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Total Present</p>
                  <p className="text-4xl font-bold text-green-600">19 days</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Total Absent</p>
                  <p className="text-4xl font-bold text-red-600">1 day</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Attendance Rate</p>
                  <p className="text-4xl font-bold text-blue-600">92%</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Period
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
                        Total Days
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.map((record, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{record.week}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            {record.present}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                            {record.absent}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                            {record.late}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center font-medium">
                          {record.total}
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
                School Fees & Payments
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
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-600 h-4 rounded-full"
                    style={{
                      width: `${(feesData.paid / feesData.totalFees) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Payment History */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    Payment History
                  </h3>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-gray-700">
                        Payment Method
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
              <h2 className="text-2xl font-bold text-gray-800">My Teachers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {subject.teacher}
                        </h3>
                        <p className="text-sm text-gray-500">{subject.name}</p>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
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
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="divide-y">
                    {["Mr. Omondi", "Mrs. Wanjiru", "Class Teacher"].map(
                      (person, idx) => (
                        <div
                          key={idx}
                          className="p-4 hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">
                                {person}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                Last message preview...
                              </p>
                            </div>
                            {idx === 0 && (
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Message View */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-96">
                  <div className="p-4 border-b flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Mr. Omondi</p>
                      <p className="text-sm text-gray-500">
                        Mathematics Teacher
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                          <p className="text-sm text-gray-800">
                            Please submit your assignment by Friday.
                          </p>
                          <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-green-600 text-white p-3 rounded-lg shadow-sm max-w-xs">
                          <p className="text-sm">
                            Yes sir, I will submit it on time.
                          </p>
                          <p className="text-xs text-green-100 mt-1">
                            10:35 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
