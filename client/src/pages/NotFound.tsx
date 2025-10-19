import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Home, Mail, Search } from "lucide-react";

export default function NotFoundPage(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 p-6">
      <Card className="w-full max-w-3xl shadow-2xl">
        <CardHeader className="flex flex-row items-start gap-4">
          <div className="rounded-md p-3 bg-red-600/10 text-red-400">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-2xl">
              Page not found — Scholarly
            </CardTitle>
            <CardDescription className="mt-1 text-sm text-slate-300">
              The resource you requested is unavailable or has moved. If you
              were expecting a student profile or dashboard, try the options
              below.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-400">
                Quick student search
              </label>
              <div className="flex w-full items-center gap-2">
                <Input
                  placeholder="Search by name, ID or class"
                  aria-label="Search students"
                  className="flex-1"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                Tip: try student ID for faster results.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">Need help?</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Contact support or return to the dashboard to continue
                  operations.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button>
                  <Home className="mr-2 h-4 w-4" />
                  Go to Dashboard
                </Button>

                <Button variant="outline">View Students</Button>

                <Button variant="ghost">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-center">
          <p className="text-xs text-slate-500">
            Scholarly — Student Management System • © {new Date().getFullYear()}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
