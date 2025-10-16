"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BarChart3,
  BookOpen,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Home,
  MessageSquare,
  Plus,
  Settings,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

interface NavCategory {
  label: string;
  items: NavItem[];
}

const navCategories: NavCategory[] = [
  {
    label: "MANAGEMENT",
    items: [
      {
        id: "overview",
        label: "Dashboard",
        icon: Home,
        href: "/admin_dashboard",
      },
      {
        id: "students",
        label: "Students",
        icon: Users,
        href: "/admin/students",
      },
      {
        id: "teachers",
        label: "Teachers",
        icon: UserCheck,
        href: "/admin/teachers",
      },
      {
        id: "classes",
        label: "Classes",
        icon: BookOpen,
        href: "/admin/classes",
      },
      {
        id: "admissions",
        label: "Admissions",
        icon: Plus,
        href: "/admin/admissions",
      },
    ],
  },
  {
    label: "ACADEMICS",
    items: [
      {
        id: "attendance",
        label: "Attendance",
        icon: Clock,
        href: "/admin/attendance",
      },
      {
        id: "performance",
        label: "Performance",
        icon: BarChart3,
        href: "/performance",
      },
      { id: "reports", label: "Reports", icon: FileText, href: "/reports" },
    ],
  },
  {
    label: "FINANCE",
    items: [
      { id: "fees", label: "Fees Management", icon: DollarSign, href: "/fees" },
    ],
  },
  {
    label: "COMMUNICATION",
    items: [
      { id: "events", label: "Events", icon: Calendar, href: "/events" },
      {
        id: "messages",
        label: "Messages",
        icon: MessageSquare,
        href: "/messages",
      },
    ],
  },
];

export const AdminSideBar = () => {
  const pathname = window.location.pathname;
  const { open } = useSidebar(); // sidebar's main open state

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Logo */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <div>
              {open && (
                <span className="font-semibold text-lg ">School Admin</span>
              )}
            </div>
          </SidebarGroupLabel>
          <SidebarTrigger className={`${open ? "absolute right-4" : ""}`} />
        </SidebarGroup>

        {/* Categories */}
        {navCategories.map((category) => (
          <SidebarGroup key={category.label}>
            <SidebarGroupLabel>
              {/* <ChevronDown className="h-4 w-4" /> */}
              {open && <span>{category.label}</span>}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                <TooltipProvider>
                  {category.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <SidebarMenuItem key={item.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <SidebarMenuButton asChild isActive={active}>
                              <a
                                href={item.href}
                                className="flex items-center gap-2"
                              >
                                <item.icon className="h-5 w-5" />
                                {open && <span>{item.label}</span>}
                              </a>
                            </SidebarMenuButton>
                          </TooltipTrigger>
                          {!open && (
                            <TooltipContent side="right">
                              {item.label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </SidebarMenuItem>
                    );
                  })}
                </TooltipProvider>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/settings"}>
              <a href="/settings" className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                {open && <span>Settings</span>}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
