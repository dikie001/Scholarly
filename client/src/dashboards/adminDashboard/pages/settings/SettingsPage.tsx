import React from "react";
import { CheckCircle, Database, Settings2, Shield, Edit } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import { AdminSideBar } from "../../../../components/shared/SideBar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        {/* Navbar */}
        <Navbar pageName="System Settings & Configuration" />

        <div className="p-4">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <Card className="text-center">
              <CardContent className="p-6">
                <Settings2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">System Status</p>
                <p className="text-2xl font-bold text-green-600">Operational</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Database className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Last Backup</p>
                <p className="text-2xl font-bold text-foreground">5 hrs ago</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Security Level</p>
                <p className="text-2xl font-bold text-foreground">High</p>
              </CardContent>
            </Card>
          </div>

          {/* Settings Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* General Settings */}
            <Card>
              <CardHeader className="flex items-center gap-2 border-b">
                <Settings2 className="w-5 h-5 text-blue-600" />
                <CardTitle>General</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 mt-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-sm text-muted-foreground">School Name</p>
                  <p className="font-medium text-foreground">CBC High School</p>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-sm text-muted-foreground">
                    Current Academic Year
                  </p>
                  <p className="font-medium text-foreground">2025/2026</p>
                </div>
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  <Edit className="w-4 h-4" />
                  Edit Details
                </Button>
              </CardContent>
            </Card>

            {/* Database & Security */}
            <Card>
              <CardHeader className="flex items-center gap-2 border-b">
                <Database className="w-5 h-5 text-purple-600" />
                <CardTitle>Database & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 mt-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-sm text-muted-foreground">Last Backup</p>
                  <span className="font-medium text-green-600 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> 5 hours ago
                  </span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <p className="text-sm text-muted-foreground">
                    User Management
                  </p>
                  <Button
                    variant="outline"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium border-blue-200"
                  >
                    Manage Admins
                  </Button>
                </div>
                <Button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white">
                  <Database className="w-4 h-4" />
                  Run Manual Backup
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
