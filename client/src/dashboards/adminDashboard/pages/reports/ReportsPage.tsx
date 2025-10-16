import { BarChart3, Clock, DollarSign, Download, UserCheck, Users } from 'lucide-react';

function ReportsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Generate Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            label: "Student Enrollment Report",
            icon: Users,
            color: "bg-blue-100 text-blue-700",
            description: "Detailed list of all students and their statuses.",
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
            description: "Daily, weekly, and monthly attendance statistics.",
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
            <h4 className="font-bold text-gray-800 mb-2">{report.label}</h4>
            <p className="text-sm text-gray-600 mb-4">{report.description}</p>
            <button className="flex items-center space-x-2 text-sm text-gray-800 px-3 py-1 border rounded-lg hover:bg-gray-100">
              <Download className="w-4 h-4" />
              <span>Generate PDF</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportsPage