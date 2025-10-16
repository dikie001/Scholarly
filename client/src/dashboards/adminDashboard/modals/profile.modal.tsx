import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sun, Moon, Monitor, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileModal = ({ open, onClose }: ProfileModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        style={{ inset: "17rem -8rem auto auto" }}
        className="max-w-xs p-0 rounded-xl w-74  absolute top-10 "
      >
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="text-base font-semibold">
            Dickens Omondi
          </DialogTitle>
          <p className="text-sm text-gray-500">omondidickens255@gmail.com</p>
        </DialogHeader>

        <div className="p-2 space-y-1">
          <button className="flex items-center w-full gap-3 px-3 py-1 text-sm text-gray-700 rounded-md hover:bg-gray-100">
            <User className="w-4 h-4" /> Profile
          </button>

          <div className="border-t my-2" />

          <p className="text-xs uppercase text-gray-400 px-3">Theme</p>
          <button className="flex items-center w-full gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100">
            <Sun className="w-4 h-4" /> Light
          </button>
          <button className="flex items-center w-full gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100">
            <Moon className="w-4 h-4" /> Dark
          </button>
          <button className="flex items-center w-full gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100">
            <Monitor className="w-4 h-4" /> System
          </button>

          <div className="border-t my-2" />

          <button className="flex items-center w-full gap-3 px-3 py-2 text-sm text-red-600 rounded-md hover:bg-red-50">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
