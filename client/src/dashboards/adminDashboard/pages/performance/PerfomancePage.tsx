import { Award, BarChart3, CheckCircle, Download, TrendingUp } from 'lucide-react';

const PerfomancePage = () => {

  const performanceData = [
    { subject: "Mathematics", avgScore: 78.5, passRate: 85, excellence: 45 },
    { subject: "English", avgScore: 82.3, passRate: 90, excellence: 52 },
    { subject: "Kiswahili", avgScore: 80.1, passRate: 88, excellence: 48 },
    { subject: "Sciences", avgScore: 75.8, passRate: 82, excellence: 40 },
    { subject: "Social Studies", avgScore: 84.2, passRate: 92, excellence: 58 },
  ];
  
  return (
    <div>
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
            <p className="text-sm text-gray-500">Students with Distinction</p>
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
                  <td className="py-3 px-4 text-center">{item.excellence}</td>
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
    </div>
  );
}

export default PerfomancePage