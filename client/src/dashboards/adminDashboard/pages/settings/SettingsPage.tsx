import React from "react";
import {
  Settings2,
  BookOpen,
  FileCheck,
  UserCog,
  BarChart3,
  MessageSquare,
  Shield,
  Database,
  Coins,
  School,
  ClipboardCheck,
  Plug,
  Palette,
  Edit,
} from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import { AdminSideBar } from "@/components/shared/SideBar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CBCSettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        <Navbar pageName="CBC Junior Secondary - System Settings" />

        <div className="p-4 space-y-6">
          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Settings2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">System Status</p>
                <p className="text-2xl font-bold text-green-600">Running</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Database Sync</p>
                <p className="text-2xl font-bold text-foreground">Active</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Security Level</p>
                <p className="text-2xl font-bold text-foreground">High</p>
              </CardContent>
            </Card>
          </div>

          {/* CBC Settings Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* School Info */}
            <SettingCard
              icon={<School className="text-blue-600" />}
              title="School Profile"
              items={[
                "School Name, Logo & Motto",
                "School Type (Public/Private)",
                "County & Subcounty",
                "Term Dates & Calendar Setup",
                "School Vision & Mission",
              ]}
            />

            {/* Learners */}
            <SettingCard
              icon={<UserCog className="text-green-600" />}
              title="Learners & Classes"
              items={[
                "Register Learners (Grade 7–9)",
                "Class & Stream Setup",
                "Assign Class Teachers",
                "Learner Transfer Management",
              ]}
            />

            {/* Subjects */}
            <SettingCard
              icon={<BookOpen className="text-yellow-600" />}
              title="CBC Learning Areas"
              items={[
                "Subject Setup (Core & Optional)",
                "Assign Teachers to Subjects",
                "Learning Areas by Grade",
                "Weekly Lessons Allocation",
              ]}
            />

            {/* CBC Competencies */}
            <SettingCard
              icon={<FileCheck className="text-emerald-600" />}
              title="Competency & Assessment"
              items={[
                "Define Key Competencies",
                "Set Strands & Sub-strands",
                "Set Performance Levels (EE, ME, AE, BE)",
                "Create Assessment Templates",
                "CBC Reporting Format",
              ]}
            />

            {/* Assessment */}
            <SettingCard
              icon={<ClipboardCheck className="text-cyan-600" />}
              title="Assessment & Evaluation"
              items={[
                "Continuous Assessment Setup",
                "Performance Rubrics Configuration",
                "Weighting Criteria (CATs, Projects, Exams)",
                "Auto/Manual Grading Toggle",
                "Feedback Comment Templates",
              ]}
            />

            {/* Reporting */}
            <SettingCard
              icon={<BarChart3 className="text-indigo-600" />}
              title="Reports & Progress"
              items={[
                "End-Term Report Design",
                "Competency Progress Tracking",
                "Learner Performance Charts",
                "Promotion Criteria Setup",
              ]}
            />

            {/* Teacher Management */}
            <SettingCard
              icon={<UserCog className="text-orange-600" />}
              title="Teacher Management"
              items={[
                "Register Teachers",
                "Allocate Learning Areas",
                "Set Performance Review Rubrics",
                "Timetable Integration",
              ]}
            />

            {/* Finance */}
            <SettingCard
              icon={<Coins className="text-yellow-700" />}
              title="Finance & Fees"
              items={[
                "Fee Structure Configuration",
                "Payment Options (Cash, M-Pesa, Bank)",
                "Discounts & Penalties",
                "Financial Year Setup",
              ]}
            />

            {/* Communication */}
            <SettingCard
              icon={<MessageSquare className="text-sky-600" />}
              title="Communication & Announcements"
              items={[
                "Parent Notifications (SMS, Email)",
                "Teacher Communication",
                "System Alerts & Reminders",
                "Noticeboard Settings",
              ]}
            />

            {/* Integrations */}
            <SettingCard
              icon={<Plug className="text-teal-600" />}
              title="Integrations"
              items={[
                "KNEC Integration (Data Upload/Sync)",
                "NEMIS Integration",
                "CBC e-Assessment APIs",
              ]}
            />

            {/* Appearance */}
            <SettingCard
              icon={<Palette className="text-purple-600" />}
              title="Interface Customization"
              items={[
                "Dark/Light Mode",
                "School Theme Colors",
                "Sidebar & Layout Options",
              ]}
            />

            {/* Security */}
            <SettingCard
              icon={<Shield className="text-red-600" />}
              title="System Security"
              items={[
                "User Roles & Permissions",
                "Audit Logs & Activity Tracking",
                "Backup & Restore Data",
                "2FA & Login Settings",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable SettingCard Component
const SettingCard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => (
  <Card>
    <CardHeader className="flex items-center gap-2 border-b">
      {icon}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="mt-3 space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center border-b pb-2 text-sm"
        >
          <p className="text-muted-foreground">{item}</p>
          <Button
            variant="outline"
            size="sm"
            className="text-blue-600 hover:text-blue-800 text-xs border-blue-200"
          >
            Configure
          </Button>
        </div>
      ))}
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        <Edit className="w-4 h-4 mr-2" /> Edit {title}
      </Button>
    </CardContent>
  </Card>
);

export default CBCSettingsPage;
