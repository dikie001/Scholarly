import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Activity,
  Edit,
  Inbox,
  MessageSquare,
  Search,
  Send,
} from "lucide-react";
import { AdminSideBar } from "../../SideBar";
import { useState } from "react";
import MessageModal from "../../modals/message.modal";

const MessagesPage = () => {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const messages = [
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
  ];

  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        {/* Navbar */}
        <Navbar pageName="Communication Center" />

        <div className="p-4">
          {/* Controls */}
          <div className="flex items-center justify-between max-sm:flex-col mt-2 gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9" />
            </div>
            <Button
              onClick={() => setShowMessageModal(true)}
              className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90"
            >
              <Edit className="w-5 h-5" />
              Compose Message
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Inbox className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Unread Messages</p>
                <p className="text-2xl font-bold text-foreground">8</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Total Sent</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Drafts</p>
                <p className="text-2xl font-bold text-foreground">2</p>
              </CardContent>
            </Card>
          </div>

          {/* Inbox and Broadcasts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Inbox Summary */}
            <Card className="lg:col-span-1">
              <CardHeader className="flex items-center gap-2 border-b">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <CardTitle>Inbox Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 mt-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Unread Messages
                  </p>
                  <span className="font-bold text-lg text-blue-700 dark:text-blue-400">
                    8
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Drafts
                  </p>
                  <span className="font-bold text-lg text-gray-700 dark:text-gray-300">
                    2
                  </span>
                </div>
                <Button className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white">
                  <Edit className="w-5 h-5" />
                  Compose New Message
                </Button>
              </CardContent>
            </Card>

            {/* Recent Broadcasts */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex items-center gap-2 border-b">
                <Activity className="w-5 h-5 text-purple-600" />
                <CardTitle>Recent Broadcasts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mt-2">
                  {messages.map((msg, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between p-3 border-b hover:bg-muted/40 rounded-md transition"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {msg.subject}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          To: {msg.recipient} • {msg.date}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
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
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Send className="w-5 h-5" />
              Send Broadcast
            </Button>
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white">
              <Activity className="w-5 h-5" />
              View Activity Logs
            </Button>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {showMessageModal && (
        <MessageModal
          open={showMessageModal}
          onClose={() => setShowMessageModal(false)}
        />
      )}
    </div>
  );
};

export default MessagesPage;
