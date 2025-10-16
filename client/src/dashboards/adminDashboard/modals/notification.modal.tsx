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
      <DialogContent
        className="
          max-w-md 
          rounded-2xl 
          border 
          border-border 
          bg-background 
          text-foreground 
          shadow-xl 
          dark:border-gray-700
        "
      >
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-lg font-semibold">
            <Bell className="w-5 h-5 text-primary" />
            <span>Notifications</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Stay up to date with the latest updates and alerts.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
          {notifications.map((note, idx) => (
            <div
              key={idx}
              className="
                p-3 
                rounded-lg 
                border 
                border-border 
                bg-card 
                hover:bg-muted/60 
                transition-colors 
                dark:hover:bg-muted/30
              "
            >
              <p className="font-medium text-foreground">{note.title}</p>
              <p className="text-sm text-muted-foreground">
                {note.description}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{note.time}</p>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={onClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationModal;
