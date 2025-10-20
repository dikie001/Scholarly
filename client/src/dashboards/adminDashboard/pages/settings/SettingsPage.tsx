"use client";

import React, { useMemo, useState } from "react";
import {
  Settings2,
  Database,
  Shield,
  School,
  UserCog,
  Globe,
  Bell,
  Plug,
} from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import { AdminSideBar } from "@/components/shared/SideBar";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner"; // optional: if you have toast util

// Minimal, production-ready Settings Page for Scholarly
export default function SettingsPage() {
  // --- Top/Overview state (read-only display values; replace with API data)
  const [systemStatus] = useState("Running");
  const [dbSync] = useState("Active");
  const [securityLevel] = useState("High");

  // === General Settings
  const [schoolName, setSchoolName] = useState<string>("Scholarly High");
  const [motto, setMotto] = useState<string>("Knowledge. Character. Success.");
  const [schoolType, setSchoolType] = useState<"Public" | "Private">("Public");
  const [county, setCounty] = useState<string>("Nairobi");
  const [academicYear, setAcademicYear] = useState<string>("2025");

  // === User Management
  const [adminName, setAdminName] = useState<string>("Admin User");
  const [adminEmail, setAdminEmail] = useState<string>("admin@scholarly.edu");
  const [role, setRole] = useState<"Super Admin" | "Admin" | "Viewer">(
    "Super Admin"
  );

  // === System Preferences
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>("English");
  const [autoBackup, setAutoBackup] = useState<boolean>(true);

  // === Notifications
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
  const [smsNotifications, setSmsNotifications] = useState<boolean>(false);

  // === Integrations
  const [knecEnabled, setKnecEnabled] = useState<boolean>(false);
  const [nemisEnabled, setNemisEnabled] = useState<boolean>(false);

  // Save state
  const [saving, setSaving] = useState(false);

  // Basic field completion progress calculation
  const completion = useMemo(() => {
    const fields = [
      !!schoolName,
      !!motto,
      !!schoolType,
      !!county,
      !!academicYear,
      !!adminName,
      !!adminEmail,
    ];
    const done = fields.filter(Boolean).length;
    return Math.round((done / fields.length) * 100);
  }, [
    schoolName,
    motto,
    schoolType,
    county,
    academicYear,
    adminName,
    adminEmail,
  ]);

  // Basic validation
  const validate = () => {
    if (!schoolName.trim()) return "School name is required.";
    if (!adminEmail.includes("@")) return "Admin email must be valid.";
    return null;
  };

  // Mock save function (replace with real API calls)
  const handleSaveAll = async () => {
    const err = validate();
    if (err) {
      // best-effort toast; if you don't have toast, replace with alert()
      try {
        toast({ title: "Validation error", description: err });
      } catch {
        alert(err);
      }
      return;
    }
    setSaving(true);
    try {
      // Simulate network
      await new Promise((r) => setTimeout(r, 700));
      // show success
      try {
        toast.success("All changes persisted.");
      } catch {
        alert("Settings saved");
      }
    } catch (e) {
      try {
        toast({
          title: "Save failed",
          description: "Check network and try again.",
        });
      } catch {
        alert("Save failed");
      }
    } finally {
      setSaving(false);
    }
  };

  // Save-per-section helpers (UI-first)
  const saveSection = async (section: string) => {
    setSaving(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      try {
        toast({ title: `${section} saved`, description: "Section persisted." });
      } catch {
        /* noop */
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <AdminSideBar />

      <div className="flex-1 min-w-0">
        <Navbar pageName="Settings — Scholarly" />

        <main className="p-6 max-w-7xl mx-auto">
          {/* Top summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <OverviewCard
              icon={<Settings2 className="w-5 h-5" />}
              label="System Status"
              value={systemStatus}
            />
            <OverviewCard
              icon={<Database className="w-5 h-5" />}
              label="Database Sync"
              value={dbSync}
            />
            <OverviewCard
              icon={<Shield className="w-5 h-5" />}
              label="Security Level"
              value={securityLevel}
            />
          </div>

          {/* Progress + Primary CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="flex-1">
              <h2 className="text-lg font-semibold">System configuration</h2>
              <p className="text-sm text-muted-foreground">
                Minimal setup to get the system live. Finish the essentials then
                iterate.
              </p>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-muted-foreground">
                    Configuration progress
                  </div>
                  <div className="text-sm font-medium">{completion}%</div>
                </div>
                <Progress value={completion} className="h-2 rounded" />
              </div>
            </div>

            <div className="w-full md:w-auto flex gap-3">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => saveSection("Quick Save")}
                disabled={saving}
              >
                Quick Save
              </Button>
              <Button onClick={handleSaveAll} disabled={saving}>
                {saving ? "Saving..." : "Save All"}
              </Button>
            </div>
          </div>

          <Separator />

          {/* Tabs */}
          <Tabs defaultValue="general" className="mt-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left column: tab triggers */}
              <div className="w-full lg:w-64">
                <TabsList className="flex-col w-full">
                  <TabsTrigger value="general" className="justify-start">
                    <Settings2 className="mr-2" /> General
                  </TabsTrigger>
                  <TabsTrigger value="users" className="justify-start">
                    <UserCog className="mr-2" /> Users
                  </TabsTrigger>
                  <TabsTrigger value="prefs" className="justify-start">
                    <Globe className="mr-2" /> Preferences
                  </TabsTrigger>
                  <TabsTrigger value="notify" className="justify-start">
                    <Bell className="mr-2" /> Notifications
                  </TabsTrigger>
                  <TabsTrigger value="integrations" className="justify-start">
                    <Plug className="mr-2" /> Integrations
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Right column: tab content */}
              <div className="flex-1">
                {/* General */}
                <TabsContent value="general" className="p-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="mb-1">School Name</Label>
                        <Input
                          value={schoolName}
                          onChange={(e) => setSchoolName(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label className="mb-1">Motto</Label>
                        <Input
                          value={motto}
                          onChange={(e) => setMotto(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label className="mb-1">School Type</Label>
                        <Select
                          onValueChange={(v) =>
                            setSchoolType(v as "Public" | "Private")
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={schoolType} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Public">Public</SelectItem>
                            <SelectItem value="Private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="mb-1">County</Label>
                        <Input
                          value={county}
                          onChange={(e) => setCounty(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label className="mb-1">Academic Year</Label>
                        <Select onValueChange={(v) => setAcademicYear(v)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={academicYear} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-end">
                        <Button
                          className="w-full"
                          onClick={() => saveSection("General")}
                        >
                          Save General
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Users */}
                <TabsContent value="users" className="p-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>User Management</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="mb-1">Admin Name</Label>
                        <Input
                          value={adminName}
                          onChange={(e) => setAdminName(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label className="mb-1">Admin Email</Label>
                        <Input
                          value={adminEmail}
                          onChange={(e) => setAdminEmail(e.target.value)}
                          type="email"
                        />
                      </div>

                      <div>
                        <Label className="mb-1">Role</Label>
                        <Select onValueChange={(v) => setRole(v as any)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={role} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Super Admin">
                              Super Admin
                            </SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-end">
                        <Button
                          className="w-full"
                          onClick={() => saveSection("Users")}
                        >
                          Save Users
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Preferences */}
                <TabsContent value="prefs" className="p-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>System Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="mb-1">Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Toggle global UI theme.
                          </p>
                        </div>
                        <Switch
                          checked={darkMode}
                          onCheckedChange={(v) => setDarkMode(!!v)}
                        />
                      </div>

                      <div>
                        <Label className="mb-1">Primary Language</Label>
                        <Select onValueChange={(v) => setLanguage(v)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={language} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Swahili">Swahili</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="mb-1">Auto Backup</Label>
                          <p className="text-sm text-muted-foreground">
                            Daily backup to configured storage.
                          </p>
                        </div>
                        <Switch
                          checked={autoBackup}
                          onCheckedChange={(v) => setAutoBackup(!!v)}
                        />
                      </div>

                      <div className="flex items-end">
                        <Button
                          className="w-full"
                          onClick={() => saveSection("Preferences")}
                        >
                          Save Preferences
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Notifications */}
                <TabsContent value="notify" className="p-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="mb-1">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Send system emails to admins/parents.
                          </p>
                        </div>
                        <Switch
                          checked={emailNotifications}
                          onCheckedChange={(v) => setEmailNotifications(!!v)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="mb-1">SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Enable SMS for critical alerts.
                          </p>
                        </div>
                        <Switch
                          checked={smsNotifications}
                          onCheckedChange={(v) => setSmsNotifications(!!v)}
                        />
                      </div>

                      <div className="flex items-end">
                        <Button
                          className="w-full"
                          onClick={() => saveSection("Notifications")}
                        >
                          Save Notifications
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Integrations */}
                <TabsContent value="integrations" className="p-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Integrations</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="mb-1">KNEC Integration</Label>
                          <p className="text-sm text-muted-foreground">
                            Upload official exam data (requires API keys).
                          </p>
                        </div>
                        <Switch
                          checked={knecEnabled}
                          onCheckedChange={(v) => setKnecEnabled(!!v)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="mb-1">NEMIS Integration</Label>
                          <p className="text-sm text-muted-foreground">
                            Sync learner registry with NEMIS.
                          </p>
                        </div>
                        <Switch
                          checked={nemisEnabled}
                          onCheckedChange={(v) => setNemisEnabled(!!v)}
                        />
                      </div>

                      <div className="flex items-end">
                        <Button
                          className="w-full"
                          onClick={() => saveSection("Integrations")}
                        >
                          Save Integrations
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

/* === Small presentational components === */

function OverviewCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card className="border border-border/60 hover:shadow-sm transition">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="p-3 rounded-md bg-muted/40">{icon}</div>
        <div className="flex-1">
          <div className="text-sm text-muted-foreground">{label}</div>
          <div className="text-base font-semibold">{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}
