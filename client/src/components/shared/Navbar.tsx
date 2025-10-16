import NotificationModal from "@/dashboards/adminDashboard/modals/notification.modal";
import ProfileModal from "@/dashboards/adminDashboard/modals/profile.modal";
import type { navbarPropTypes } from "@/types/navbar.types";
import { Bell, Menu, User } from "lucide-react";
import React, { useState } from "react";
import { useSidebar } from "../ui/sidebar";
import { Button } from "@/components/ui/button";

const Navbar: React.FC<navbarPropTypes> = ({ pageName }) => {
  const { toggleSidebar, setOpen } = useSidebar();
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <header className="flex items-center justify-between border-b bg-background px-4 py-4 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            toggleSidebar();
            setOpen(true);
          }}
          className="md:hidden"
        >
          <Menu className="h-5 w-5 text-foreground" />
        </Button>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {pageName || "Admin"}
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full hover:bg-accent cursor-pointer"
          onClick={() => setShowNotificationModal(true)}
        >
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-destructive" />
        </Button>

        {/* Profile */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-primary text-primary-foreground cursor-pointer"
          onClick={() => setShowProfileModal(true)}
        >
          <User className="h-5 w-5" />
        </Button>
      </div>

      {/* MODALS */}
      {showNotificationModal && (
        <NotificationModal
          open={showNotificationModal}
          onClose={() => setShowNotificationModal(false)}
        />
      )}
      {showProfileModal && (
        <ProfileModal
          open={showProfileModal}
          onClose={() => setShowProfileModal(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
