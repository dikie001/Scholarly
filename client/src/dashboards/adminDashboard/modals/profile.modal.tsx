import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/shared/ThemeProvider";
import { LogOut, Monitor, Moon, Sun, User } from "lucide-react";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileModal = ({ open, onClose }: ProfileModalProps) => {
  const { setTheme } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        style={{ inset: "17rem -8rem auto auto" }}
        className=" w-72 rounded-xl border bg-background shadow-md p-0"
        onInteractOutside={onClose}
      >
        <DialogHeader className="p-4 border-b -mb-1">
          <DialogTitle className="text-base font-semibold">
            Dickens Omondi
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            omondidickens255@gmail.com
          </p>
        </DialogHeader>

        <div className="p-2 space-y-1">
          <Button
            variant="ghost"
            onClick={() => {
              onClose();
            }}
            className="w-full cursor-pointer justify-start gap-3 -mt-4 -mb-2  text-sm"
          >
            <User className="w-4 h-4" /> Profile
          </Button>

          <Separator className="my-2" />

          <p className="text-xs uppercase text-muted-foreground px-3">Theme</p>
          <Button
            variant="ghost"
            className="w-full cursor-pointer justify-start gap-3 text-sm"
            onClick={() => {
              setTheme("light");
              onClose();
            }}
          >
            <Sun className="w-4 h-4" /> Light
          </Button>
          <Button
            variant="ghost"
            className="w-full cursor-pointer justify-start gap-3 text-sm"
            onClick={() => {
              setTheme("dark");
              onClose();
            }}
          >
            <Moon className="w-4 h-4" /> Dark
          </Button>
          <Button
            variant="ghost"
            className="w-full cursor-pointer justify-start gap-3 text-sm"
            onClick={() => {
              setTheme("system");
              onClose();
            }}
          >
            <Monitor className="w-4 h-4" /> System
          </Button>

          <Separator className="my-2" />

          <Button
            variant="ghost"
            onClick={() => {
              onClose();
            }}
            className="w-full cursor-pointer justify-start gap-3 text-sm text-destructive hover:text-destructive"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
