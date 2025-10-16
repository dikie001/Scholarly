import {
    AlertCircle,
    Bell,
    CheckCircle,
    DollarSign,
    Download,
    TrendingUp,
} from "lucide-react";

const FeesPage = () => {
  const formatCurrency = (amount:number) => {
    return `KSh ${amount.toLocaleString("en-KE")}`;
  };

  const feesSummary = {
    totalExpected: 56250000,
    totalCollected: 45200000,
    totalPending: 11050000,
    collectionRate: 80.4,
    byGrade: [
      {
        grade: "Grade 9",
        expected: 12000000,
        collected: 10500000,
        rate: 87.5,
      },
      {
        grade: "Grade 8",
        expected: 15000000,
        collected: 12000000,
        rate: 80.0,
      },
      {
        grade: "Grade 7",
        expected: 18000000,
        collected: 14400000,
        rate: 80.0,
      },
      {
        grade: "Grade 6",
        expected: 11250000,
        collected: 8300000,
        rate: 73.8,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Fees Management</h2>

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
};

export default FeesPage;
