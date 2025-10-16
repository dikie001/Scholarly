import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface NotificationModalProps {
  open: boolean;
  onClose: () => void;
}

const NotificationModal = ({ open, onClose }: NotificationModalProps) => {
  const notifications = [
    {
      title: "System Update Completed",
      description: "Database backup finished successfully.",
      time: "2 hours ago",
    },
    {
      title: "New Message",
      description: "You have a new message from the Principal.",
      time: "5 hours ago",
    },
    {
      title: "Maintenance Alert",
      description: "Scheduled downtime tomorrow at 10PM.",
      time: "1 day ago",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-blue-600" />
            <span>Notifications</span>
          </DialogTitle>
          <DialogDescription>
            Stay up to date with the latest updates and alerts.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 max-h-60 overflow-y-auto">
          {notifications.map((note, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border hover:bg-gray-50 transition"
            >
              <p className="font-medium text-gray-800">{note.title}</p>
              <p className="text-sm text-gray-600">{note.description}</p>
              <p className="text-xs text-gray-400">{note.time}</p>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button variant="secondary" className="cursor-pointer " onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationModal;
