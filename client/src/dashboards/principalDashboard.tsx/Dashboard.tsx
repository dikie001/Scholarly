// src/components/PrincipalDashboard.tsx
import React from "react";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  BookOpen,
  DollarSign,
  Calendar,
  Bell,
  ChevronDown,
  Search,
  BarChart3,
  PieChart,
  Star,
  ClipboardList,
  Megaphone,
  LogOut,
  Settings,
  GraduationCap,
  Building,
} from "lucide-react";

// Main Dashboard Component
const PrincipalDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

// 1. Sidebar Component
const Sidebar = () => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, name: "Dashboard" },
    { icon: <GraduationCap size={20} />, name: "Academics" },
    { icon: <Users size={20} />, name: "Students" },
    { icon: <UserCheck size={20} />, name: "Teachers" },
    { icon: <DollarSign size={20} />, name: "Finance" },
    { icon: <ClipboardList size={20} />, name: "Assessments" },
    { icon: <Megaphone size={20} />, name: "Communication" },
    { icon: <Building size={20} />, name: "Resources" },
    { icon: <Settings size={20} />, name: "Settings" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col">
      <div className="flex items-center justify-center h-20 border-b dark:border-gray-700">
        <BookOpen className="text-blue-600 dark:text-blue-400" size={28} />
        <h1 className="ml-3 text-2xl font-bold text-gray-800 dark:text-white">
          CBC School
        </h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a
                href="#"
                className={`flex items-center p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors ${
                  index === 0
                    ? "bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-300 font-semibold"
                    : ""
                }`}
              >
                {item.icon}
                <span className="ml-4">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t dark:border-gray-700">
        <a
          href="#"
          className="flex items-center p-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-gray-700"
        >
          <LogOut size={20} />
          <span className="ml-4">Logout</span>
        </a>
      </div>
    </aside>
  );
};

// 2. Header Component
const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">
          Welcome Back, Principal Dikie
        </h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search students, teachers..."
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
        <div className="relative">
          <Bell size={24} className="cursor-pointer" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-xs items-center justify-center">
              3
            </span>
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="Principal"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold text-sm">Dikie</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Principal
            </p>
          </div>
          <ChevronDown size={20} className="ml-2" />
        </div>
      </div>
    </header>
  );
};

// 3. Main Dashboard Content
const DashboardContent = () => {
  return (
    <>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Students"
          value="1,250"
          icon={<Users />}
          trend="+5% This Term"
        />
        <StatCard
          title="Total Staff"
          value="85"
          icon={<UserCheck />}
          trend="+2 New Hires"
        />
        <StatCard
          title="Student Attendance"
          value="96.8%"
          icon={<BarChart3 />}
          trend="-0.2% Yesterday"
          isNegative={true}
        />
        <StatCard
          title="Fees Collected"
          value="89%"
          icon={<DollarSign />}
          trend="+12% This Week"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CBC Competency Overview */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">
            CBC Competency Mastery (Grade 5)
          </h3>
          {/* In a real app, this would be a chart library component e.g. Recharts or Chart.js */}
          <div className="w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
            <p className="text-gray-500">
              Radar Chart for Competencies would be here
            </p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Upcoming Events</h3>
          <ul className="space-y-4">
            <EventItem
              date="Oct 15"
              title="Parent-Teacher Conferences"
              time="4:00 PM - 7:00 PM"
            />
            <EventItem
              date="Oct 21"
              title="Board of Governors Meeting"
              time="10:00 AM"
            />
            <EventItem
              date="Oct 28"
              title="Mid-Term Break Begins"
              time="All Day"
            />
            <EventItem date="Nov 05" title="School Sports Day" time="9:00 AM" />
          </ul>
        </div>
      </div>

      {/* Data Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        {/* Recent Learner Assessments */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Recent Learner Assessments</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b dark:border-gray-700 text-sm text-gray-500">
                  <th className="py-2">Student</th>
                  <th className="py-2">Subject</th>
                  <th className="py-2">Competency</th>
                  <th className="py-2">Level</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  student="Asha Wanjiru"
                  subject="Science"
                  competency="Problem Solving"
                  level="Exceeding"
                />
                <TableRow
                  student="Brian Omondi"
                  subject="Mathematics"
                  competency="Critical Thinking"
                  level="Meeting"
                />
                <TableRow
                  student="Fatima Hassan"
                  subject="CRE"
                  competency="Citizenship"
                  level="Approaching"
                />
                <TableRow
                  student="David Kimani"
                  subject="Art & Craft"
                  competency="Creativity"
                  level="Exceeding"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Staff on Leave */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4">Staff on Leave Today</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b dark:border-gray-700 text-sm text-gray-500">
                  <th className="py-2">Teacher Name</th>
                  <th className="py-2">Department</th>
                  <th className="py-2">Leave Type</th>
                  <th className="py-2">Return Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">Mercy Achieng</td>
                  <td className="py-3">Science Dept.</td>
                  <td className="py-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                      Sick
                    </span>
                  </td>
                  <td className="py-3">Oct 13, 2025</td>
                </tr>
                <tr>
                  <td className="py-3">Peter Musyoka</td>
                  <td className="py-3">Humanities</td>
                  <td className="py-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      Personal
                    </span>
                  </td>
                  <td className="py-3">Oct 13, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

// 4. Child Components for DashboardContent

// StatCard Component
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  isNegative?: boolean;
}
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  isNegative,
}) => {
  const trendColor = isNegative ? "text-red-500" : "text-green-500";
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <div className="flex items-center">
        <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-300">
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
      <p className={`text-xs mt-2 ${trendColor}`}>{trend}</p>
    </div>
  );
};

// EventItem Component
interface EventItemProps {
  date: string;
  title: string;
  time: string;
}
const EventItem: React.FC<EventItemProps> = ({ date, title, time }) => (
  <li className="flex items-start">
    <div className="flex flex-col items-center justify-center bg-blue-100 dark:bg-gray-700 rounded-md p-2 w-16">
      <span className="font-bold text-blue-700 dark:text-blue-300 text-lg">
        {date.split(" ")[1]}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {date.split(" ")[0]}
      </span>
    </div>
    <div className="ml-4">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{time}</p>
    </div>
  </li>
);

// TableRow Component for Assessments
interface TableRowProps {
  student: string;
  subject: string;
  competency: string;
  level: "Exceeding" | "Meeting" | "Approaching";
}
const TableRow: React.FC<TableRowProps> = ({
  student,
  subject,
  competency,
  level,
}) => {
  const levelColor = {
    Exceeding:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Meeting: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Approaching:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  };
  return (
    <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
      <td className="py-3 font-medium">{student}</td>
      <td className="py-3 text-gray-600 dark:text-gray-400">{subject}</td>
      <td className="py-3 text-gray-600 dark:text-gray-400">{competency}</td>
      <td className="py-3">
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${levelColor[level]}`}
        >
          {level}
        </span>
      </td>
    </tr>
  );
};

export default PrincipalDashboard;
