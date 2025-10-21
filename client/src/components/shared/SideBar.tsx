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
        href: "/admin/performance",
      },
      {
        id: "reports",
        label: "Reports",
        icon: FileText,
        href: "/admin/reports",
      },
    ],
  },
  {
    label: "FINANCE",
    items: [
      {
        id: "fees",
        label: "Fees Management",
        icon: DollarSign,
        href: "/admin/fees",
      },
    ],
  },
  {
    label: "COMMUNICATION",
    items: [
      { id: "events", label: "Events", icon: Calendar, href: "/admin/events" },
      {
        id: "messages",
        label: "Messages",
        icon: MessageSquare,
        href: "/admin/messages",
      },
    ],
  },
];

export const AdminSideBar = () => {
  const pathname = window.location.pathname;
  const { open } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="transition-all ease-in-out duration-300"
    >
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
          <Tooltip>
            <TooltipTrigger
              className={`${open ? "absolute right-4 " : "mt-4"}`}
            >
              {" "}
              <SidebarTrigger className={`cursor-e-resize `} />
            </TooltipTrigger>
            <TooltipContent side={open ? "bottom" : "right"}>
              {open ? "Close sidebar" : "Open sidebar"}
            </TooltipContent>
          </Tooltip>
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
                    const showToolTip = !open;
                    return (
                      <SidebarMenuItem key={item.id}>
                        <Tooltip
                          delayDuration={0}
                          open={showToolTip ? undefined : false}
                        >
                          <TooltipTrigger asChild>
                            <SidebarMenuButton asChild isActive={active}>
                              <a
                                href={item.href}
                                className="flex items-center gap-2"
                              >
                                <item.icon className="h-5 w-5 " />
                                {open && <span>{item.label}</span>}
                              </a>
                            </SidebarMenuButton>
                          </TooltipTrigger>
                          {!open && (
                            <TooltipContent
                              side="right"
                              className="bg-primary text-foreground font-medium"
                            >
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

      <SidebarFooter className="mb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Tooltip>
              <TooltipTrigger>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/admin/settings"}
                >
                  <a href="/admin/settings" className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    {open && <span>Settings</span>}
                  </a>
                </SidebarMenuButton>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
