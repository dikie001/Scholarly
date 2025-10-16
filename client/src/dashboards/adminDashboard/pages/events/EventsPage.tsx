import { Calendar, Plus } from 'lucide-react';

const EventsPage = () => {
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
          <p className="text-gray-400">Interactive Calendar View Placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default EventsPage