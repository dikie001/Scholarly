"use client";

import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { AdminSideBar } from "@/components/shared/SideBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddTeachersPage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [form, setForm] = useState({
    // Personal Info
    fullName: "",
    gender: "",
    dob: "",
    nationalId: "",
    phone: "",
    email: "",
    address: "",
    county: "",
    // Academic Info
    tscNumber: "",
    qualification: "",
    institution: "",
    graduationYear: "",
    subjects: [] as string[],
    experience: "",
    employmentType: "",
    currentGrade: "",
    // School Info
    schoolName: "",
    department: "",
    designation: "",
    classesAssigned: [],
    streamsAssigned: [],
    cocurricular: [] as string[],
    // System Access
    role: "",
    username: "",
    password: "",
    status: "",
    // Documents
    profilePhoto: null as File | null,
    employmentLetter: null as File | null,
    tscCertificate: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSelectChange = (field: string, value: string | string[]) => {
    setForm({ ...form, [field]: value });
  };

  const handleFileChange = (field: string, file: File | null) => {
    setForm({ ...form, [field]: file });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log(form);
    setForm({
      fullName: "",
      gender: "",
      dob: "",
      nationalId: "",
      phone: "",
      email: "",
      address: "",
      county: "",
      tscNumber: "",
      qualification: "",
      institution: "",
      graduationYear: "",
      subjects: [],
      experience: "",
      employmentType: "",
      currentGrade: "",
      schoolName: "",
      department: "",
      designation: "",
      classesAssigned: [],
      streamsAssigned: [],
      cocurricular: [],
      role: "",
      username: "",
      password: "",
      status: "",
      profilePhoto: null,
      employmentLetter: null,
      tscCertificate: null,
    });
  };

  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        <Navbar pageName="Add Teacher" />

        <div className="p-6 flex justify-center items-start w-full">
          <Card className="w-full max-w-5xl shadow-lg border border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Add Teacher
              </CardTitle>
              <CardDescription>
                Fill in the details to register a new teacher.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-5 border-b mb-6">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="school">School</TabsTrigger>
                  <TabsTrigger value="access">Access</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                {/* Personal Info */}
                <TabsContent value="personal">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col space-y-2">
                      <Label>Full Name</Label>
                      <Input
                        name="fullName"
                        placeholder="Enter full name"
                        value={form.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Gender</Label>
                      <Select
                        onValueChange={(val) =>
                          handleSelectChange("gender", val)
                        }
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
                    <div className="flex flex-col space-y-2">
                      <Label>Date of Birth</Label>
                      <Input
                        name="dob"
                        type="date"
                        value={form.dob}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>National ID</Label>
                      <Input
                        name="nationalId"
                        placeholder="Enter National ID"
                        value={form.nationalId}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Phone</Label>
                      <Input
                        name="phone"
                        placeholder="+254712345678"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Email</Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="teacher@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Address</Label>
                      <Textarea
                        name="address"
                        placeholder="Enter address"
                        value={form.address}
                        onChange={handleChange}
                        className="resize-none"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>County</Label>
                      <Input
                        name="county"
                        placeholder="Enter county"
                        value={form.county}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Academic Info */}
                <TabsContent value="academic">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col space-y-2">
                      <Label>TSC Number</Label>
                      <Input
                        name="tscNumber"
                        placeholder="Enter TSC number"
                        value={form.tscNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Highest Qualification</Label>
                      <Input
                        name="qualification"
                        placeholder="Degree, Diploma etc."
                        value={form.qualification}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Institution Attended</Label>
                      <Input
                        name="institution"
                        placeholder="Enter institution"
                        value={form.institution}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Year of Graduation</Label>
                      <Input
                        name="graduationYear"
                        placeholder="YYYY"
                        value={form.graduationYear}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Subjects of Specialization</Label>
                      <Input
                        name="subjects"
                        placeholder="Math, English..."
                        value={form.subjects.join(", ")}
                        onChange={(e) =>
                          handleSelectChange(
                            "subjects",
                            e.target.value.split(",").map((s) => s.trim())
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Years of Experience</Label>
                      <Input
                        name="experience"
                        placeholder="Enter experience in years"
                        value={form.experience}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Employment Type</Label>
                      <Select
                        onValueChange={(val) =>
                          handleSelectChange("employmentType", val)
                        }
                        value={form.employmentType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Permanent">Permanent</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                          <SelectItem value="Intern">Intern</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Current Grade</Label>
                      <Select
                        onValueChange={(val) =>
                          handleSelectChange("currentGrade", val)
                        }
                        value={form.currentGrade}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {["C1", "C2", "C3"].map((g) => (
                            <SelectItem key={g} value={g}>
                              {g}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                {/* School Info */}
                <TabsContent value="school">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col space-y-2">
                      <Label>School Name</Label>
                      <Input
                        name="schoolName"
                        value={form.schoolName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Department</Label>
                      <Input
                        name="department"
                        value={form.department}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Designation</Label>
                      <Input
                        name="designation"
                        value={form.designation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Classes Assigned</Label>
                      <Input
                        name="classesAssigned"
                        placeholder="7,8,9"
                        value={form.classesAssigned.join(", ")}
                        onChange={(e) =>
                          handleSelectChange(
                            "classesAssigned",
                            e.target.value.split(",").map((s) => s.trim())
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Streams Assigned</Label>
                      <Input
                        name="streamsAssigned"
                        placeholder="A, B, C"
                        value={form.streamsAssigned.join(", ")}
                        onChange={(e) =>
                          handleSelectChange(
                            "streamsAssigned",
                            e.target.value.split(",").map((s) => s.trim())
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Co-curricular Involvement</Label>
                      <Input
                        name="cocurricular"
                        placeholder="Clubs, Sports..."
                        value={form.cocurricular.join(", ")}
                        onChange={(e) =>
                          handleSelectChange(
                            "cocurricular",
                            e.target.value.split(",").map((s) => s.trim())
                          )
                        }
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* System Access */}
                <TabsContent value="access">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col space-y-2">
                      <Label>Role</Label>
                      <Select
                        onValueChange={(val) => handleSelectChange("role", val)}
                        value={form.role}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Teacher">Teacher</SelectItem>
                          <SelectItem value="Admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Username</Label>
                      <Input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Password</Label>
                      <Input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Status</Label>
                      <Select
                        onValueChange={(val) =>
                          handleSelectChange("status", val)
                        }
                        value={form.status}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                {/* Documents */}
                <TabsContent value="documents">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col space-y-2">
                      <Label>Profile Photo</Label>
                      <Input
                        type="file"
                        onChange={(e) =>
                          handleFileChange(
                            "profilePhoto",
                            e.target.files ? e.target.files[0] : null
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>Employment Letter</Label>
                      <Input
                        type="file"
                        onChange={(e) =>
                          handleFileChange(
                            "employmentLetter",
                            e.target.files ? e.target.files[0] : null
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label>TSC Certificate</Label>
                      <Input
                        type="file"
                        onChange={(e) =>
                          handleFileChange(
                            "tscCertificate",
                            e.target.files ? e.target.files[0] : null
                          )
                        }
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-6 w-full bg-primary text-foreground hover:bg-primary/80">
                    Preview Submission
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl bg-popover text-popover-foreground">
                  <DialogHeader>
                    <DialogTitle>Preview Teacher Details</DialogTitle>
                    <DialogDescription>
                      Confirm all details before submission.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2 text-sm">
                    {Object.entries(form).map(([key, value]) => (
                      <p key={key}>
                        <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
                        {Array.isArray(value) ? value.join(", ") : value || "—"}
                      </p>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className="text-foreground"
                      onClick={handleSubmit}
                    >
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
