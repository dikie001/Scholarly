import { Activity, Edit, MessageSquare } from 'lucide-react';

const MessagesPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Communication Center</h2>

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
}

export default MessagesPage