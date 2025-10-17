import React, { useState } from "react";
import {
  Calendar,
  Plus,
  Search,
  CalendarDays,
  Clock,
  Star,
} from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import { AdminSideBar } from "../../SideBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EventsPage = () => {
  const [showEventsModal, setShowEventsModal] = useState(false);
  const events = [
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
  ];

  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        {/* Navbar */}
        <Navbar pageName="Events & Calendar" />

        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center justify-between max-sm:flex-col mt-2 gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search events..." className="pl-9" />
            </div>
            <Button onClick={()=>setShowEventsModal(true)} className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90">
              <Plus className="w-5 h-5" />
              Add Event
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <CalendarDays className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Total Events</p>
                <p className="text-2xl font-bold text-foreground">
                  {events.length}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Upcoming Soon</p>
                <p className="text-2xl font-bold text-foreground">3</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Highlighted</p>
                <p className="text-2xl font-bold text-foreground">2</p>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <Card className="mt-6">
            <CardHeader className="flex items-center gap-2 border-b">
              <Calendar className="w-5 h-5 text-blue-600" />
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mt-2">
                {events.map((event, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-3 border-l-4 border-border hover:bg-muted/40 rounded-lg transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-800 dark:text-gray-100 w-16">
                        {event.date}
                      </span>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {event.event}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${event.color}`}
                    >
                      {event.type}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Calendar className="w-5 h-5" />
              Export Calendar
            </Button>
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white">
              <Star className="w-5 h-5" />
              Highlight Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
