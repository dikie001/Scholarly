import { Bell, Menu, User } from "lucide-react";
import type React from "react";
import { useSidebar } from "../ui/sidebar";
import type { navbarPropTypes } from "@/types/navbar.types";
import { useState } from "react";
import NotificationModal from "@/dashboards/adminDashboard/modals/notification.modal";
import ProfileModal from "@/dashboards/adminDashboard/modals/profile.modal";

const Navbar: React.FC<navbarPropTypes> = ({ pageName }) => {
  const { toggleSidebar, setOpen } = useSidebar();
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  return (
    <header className="flex items-center gap-4 border-b pt-2 pb-1 px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4 items-center justify-center">
          <Menu
            onClick={() => {
              toggleSidebar();
              setOpen(true);
            }}
            size={18}
            className="cursor-pointer md:hidden"
          />
          <h2 className="text-2xl font-bold tracking-tight">
            {pageName || "Admin"}
          </h2>
        </div>

        <div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell
                onClick={() => setShowNotificationModal(true)}
                className="w-6 h-6 text-gray-600 cursor-pointer"
              />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2 p-2">
              <div
                onClick={() => setShowProfileModal(true)}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* MODALS */}
        {/* Notification Modal */}
        {showNotificationModal && (
          <NotificationModal
            open={showNotificationModal}
            onClose={() => setShowNotificationModal(false)}
          />
        )}
        {/* Profile Modal */}
        {showProfileModal && (
          <ProfileModal
            open={showProfileModal}
            onClose={() => setShowProfileModal(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
