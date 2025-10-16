import { CheckCircle, Database, Settings2 } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        System Settings & Configuration
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <Settings2 className="w-5 h-5 mr-2 text-gray-600" />
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
}

export default SettingsPage