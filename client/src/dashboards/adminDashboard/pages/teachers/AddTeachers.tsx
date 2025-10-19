"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { AdminSideBar } from "@/components/shared/SideBar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function AddTeachersPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    department: "",
    subjects: "",
    qualification: "",
    certification: "",
    employmentStatus: "",
    dateOfJoining: "",
    address: "",
    cv: null,
    certificates: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSelectChange = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.files?.[0] || null });

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log("Submitted", form);
    setForm({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      department: "",
      subjects: "",
      qualification: "",
      certification: "",
      employmentStatus: "",
      dateOfJoining: "",
      address: "",
      cv: null,
      certificates: null,
    });
  };

  return (
    <div className="flex min-h-screen bg-background w-full">
      <AdminSideBar />
      <div className="flex-1">
        <Navbar pageName="Add Teacher" />

        <div className="p-6">
          <Card className="max-w-4xl mx-auto shadow-lg border border-border">
            <CardHeader>
              <CardTitle>Add Teacher</CardTitle>
              <CardDescription>
                Fill in essential details to register a new teacher.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="professional">
                    Professional Info
                  </TabsTrigger>
                  <TabsTrigger value="employment">Employment Info</TabsTrigger>
                  <TabsTrigger value="attachments">Attachments</TabsTrigger>
                </TabsList>

                {/* Personal Info */}
                <TabsContent value="personal">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <Select
                        value={form.gender}
                        onValueChange={(value) =>
                          handleSelectChange("gender", value)
                        }
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
                </TabsContent>

                {/* Professional Info */}
                <TabsContent value="professional">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Input
                        id="department"
                        name="department"
                        value={form.department}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="subjects">Teaching Subjects</Label>
                      <Input
                        id="subjects"
                        name="subjects"
                        value={form.subjects}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="qualification">
                        Highest Qualification
                      </Label>
                      <Input
                        id="qualification"
                        name="qualification"
                        value={form.qualification}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="certification">
                        Teaching Certification
                      </Label>
                      <Input
                        id="certification"
                        name="certification"
                        value={form.certification}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Employment Info */}
                <TabsContent value="employment">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="employmentStatus">
                        Employment Status
                      </Label>
                      <Select
                        value={form.employmentStatus}
                        onValueChange={(value) =>
                          handleSelectChange("employmentStatus", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Permanent">Permanent</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="dateOfJoining">Date of Joining</Label>
                      <Input
                        id="dateOfJoining"
                        name="dateOfJoining"
                        type="date"
                        value={form.dateOfJoining}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="address">Residential Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Attachments */}
                <TabsContent value="attachments">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="cv">Curriculum Vitae (CV)</Label>
                      <Input
                        id="cv"
                        name="cv"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="certificates">Certificates</Label>
                      <Input
                        id="certificates"
                        name="certificates"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Preview / Submit */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4 w-full">Preview Submission</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Preview Teacher Details</DialogTitle>
                    <DialogDescription>
                      Confirm all details before submission.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2 text-sm mt-2">
                    {Object.entries(form).map(([key, value]) => (
                      <p key={key}>
                        <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
                        {value instanceof File ? value.name : value || "—"}
                      </p>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                      Confirm & Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
