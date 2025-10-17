"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast";

export default function AddTeachersPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    department: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "✅ Teacher Added Successfully",
    //   description: `${form.fullName} has been registered.`,
    // });
    setForm({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      department: "",
      address: "",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex justify-center items-start">
      <Card className="w-full max-w-2xl shadow-lg border border-border bg-card">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Add Teacher</CardTitle>
          <CardDescription>
            Fill in the details to add a new teacher.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter full name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +254712345678"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Gender</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("gender", value)}
                  value={form.gender}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Department</Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("department", value)
                }
                value={form.department}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mathematics">Mathematics</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="History">History</SelectItem>
                  <SelectItem value="ICT">ICT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                name="address"
                placeholder="Enter address"
                value={form.address}
                onChange={handleChange}
                className="resize-none"
              />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  className="w-full bg-primary hover:bg-primary/80"
                >
                  Preview Submission
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-popover text-popover-foreground">
                <DialogHeader>
                  <DialogTitle>Preview Teacher Details</DialogTitle>
                  <DialogDescription>
                    Confirm before submitting.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Name:</strong> {form.fullName || "—"}
                  </p>
                  <p>
                    <strong>Email:</strong> {form.email || "—"}
                  </p>
                  <p>
                    <strong>Phone:</strong> {form.phone || "—"}
                  </p>
                  <p>
                    <strong>Gender:</strong> {form.gender || "—"}
                  </p>
                  <p>
                    <strong>Department:</strong> {form.department || "—"}
                  </p>
                  <p>
                    <strong>Address:</strong> {form.address || "—"}
                  </p>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleSubmit}>
                    Confirm & Submit
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
