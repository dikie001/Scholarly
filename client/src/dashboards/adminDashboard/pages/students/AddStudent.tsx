import React, { useState, useEffect } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { User, Calendar, BookOpen, Users, Circle } from "lucide-react";
import { AdminSideBar } from "../../../../components/shared/SideBar";
import Navbar from "@/components/shared/Navbar";
import type { addStudentFormTypes } from "@/types/student.types";

export default function StudentRegistration() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [formData, setFormData] = useState<addStudentFormTypes>({
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),
    gender: "other",
    admissionNumber: 0,
    grade: "",
    stream: "",
    parentName: "",
    parentEmail: "",
    parentPhone: 0,
    alternatePhone: 0,
    address: "",
    medicalInfo: "",
    previousSchool: "",
    residence: "",
  });

  const steps = [
    {
      title: "Personal Information",
      icon: User,
      fields: [
        "firstName",
        "lastName",
        "dateOfBirth",
        "gender",
        "admissionNumber",
      ],
    },
    {
      title: "Academic Information",
      icon: BookOpen,
      fields: ["grade", "stream"],
    },
    {
      title: "Parent/Guardian Information",
      icon: Users,
      fields: ["parentName", "parentEmail", "parentPhone", "address"],
    },
    { title: "Medical Information", icon: Circle, fields: [] },
  ];

  useEffect(() => calculateProgress(), [formData]);

  const calculateProgress = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "gender",
      "admissionNumber",
      "grade",
      "stream",
      "parentName",
      "parentEmail",
      "parentPhone",
      "address",
    ];
    const filledFields = requiredFields.filter(
      (f) => formData[f] !== ""
    ).length;
    setCompletionPercentage(
      Math.round((filledFields / requiredFields.length) * 100)
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleNext = () =>
    currentStep < steps.length - 1 && setCurrentStep((prev) => prev + 1);
  const handlePrevious = () =>
    currentStep > 0 && setCurrentStep((prev) => prev - 1);
  const handleSubmit = () =>
    alert("Student registration submitted successfully!");

  const renderStepContent = () => {
    const inputClass =
      "bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary";
    const selectClass =
      "bg-background border w-full border-border text-foreground focus:ring-2 focus:ring-primary";
    const selectContent = "bg-background border border-border text-foreground";

    switch (currentStep) {
      case 0:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" /> Personal Information
              </CardTitle>
              <CardDescription>Enter student's basic details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="dateOfBirth"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" /> Date of Birth *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="gender">Gender *</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(val) => handleSelectChange("gender", val)}
                  >
                    <SelectTrigger className={selectClass}>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className={selectContent}>
                      {["male", "female", "other"].map((g) => (
                        <SelectItem key={g} value={g}>
                          {g.charAt(0).toUpperCase() + g.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>{" "}
              <div className="space-y-2">
                <Label htmlFor="residence">Place of residence *</Label>
                <Input
                  id="residence"
                  name="residence"
                  value={formData.residence}
                  onChange={handleInputChange}
                  placeholder="Enter place of residence"
                  className={inputClass}
                />
              </div>
            </CardContent>
          </Card>
        );

      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Academic Information
              </CardTitle>
              <CardDescription>
                Student's grade and class details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="grade">Grade *</Label>
                  <Select
                    value={formData.grade}
                    onValueChange={(val) => handleSelectChange("grade", val)}
                  >
                    <SelectTrigger className={selectClass}>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent className={selectContent}>
                      {Array.from(
                        { length: 9 },
                        (_, i) => `Grade ${i + 1}`
                      ).map((g) => (
                        <SelectItem key={g} value={g}>
                          {g}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stream">Stream/Class *</Label>
                  <Select
                    value={formData.stream}
                    onValueChange={(val) => handleSelectChange("stream", val)}
                  >
                    <SelectTrigger className={selectClass}>
                      <SelectValue placeholder="Select stream" />
                    </SelectTrigger>
                    <SelectContent className={selectContent}>
                      {["A", "B", "C", "D"].map((s) => (
                        <SelectItem
                          key={s}
                          value={s}
                        >{`Stream ${s}`}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="previousSchool">
                    Previous School{" "}
                    <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    id="previousSchool"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    placeholder="Enter previous school"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admissionNumber">Admission Number *</Label>
                  <Input
                    id="admissionNumber"
                    name="admissionNumber"
                    value={formData.admissionNumber}
                    onChange={handleInputChange}
                    placeholder="Enter admission number"
                    className={inputClass}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" /> Parent/Guardian Information
              </CardTitle>
              <CardDescription>Primary contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                <Input
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentEmail">Email *</Label>
                  <Input
                    id="parentEmail"
                    name="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    placeholder="parent@example.com"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Phone *</Label>
                  <Input
                    id="parentPhone"
                    name="parentPhone"
                    type="tel"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    placeholder="+254 700 000 000"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* <div className="space-y-2">
                <Label htmlFor="alternatePhone">
                  Alternate Phone (Optional)
                </Label>
                <Input
                  id="alternatePhone"
                  name="alternatePhone"
                  type="tel"
                  value={formData.alternatePhone}
                  onChange={handleInputChange}
                  placeholder="+254 700 000 000"
                  className={inputClass}
                />
              </div> */}

              <div className="space-y-2">
                <Label htmlFor="address">Home Address *</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter address"
                  className={inputClass + " min-h-24"}
                />
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Medical Information</CardTitle>
              <CardDescription>
                Allergies, conditions, or special needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="medicalInfo">Medical Notes (Optional)</Label>
                <Textarea
                  id="medicalInfo"
                  name="medicalInfo"
                  value={formData.medicalInfo}
                  onChange={handleInputChange}
                  placeholder="Enter medical info"
                  className={inputClass + " min-h-32"}
                />
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-background w-full max-w-screen flex-wrap">
      <AdminSideBar />
      <div className="flex-1 transition-all duration-300 ease-in-out w-full max-w-full">
        <Navbar pageName="Student Registration" />

        <div className="p-4 space-y-6 max-w-4xl mx-auto">
          {/* Progress */}
          <Card>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm font-medium text-muted-foreground">
                <span>Registration Progress</span>
                <span>{completionPercentage}%</span>
              </div>
              <Progress value={completionPercentage} className="h-3" />
            </CardContent>
          </Card>

          {/* Step Content */}
          {renderStepContent()}

          {/* Navigation */}
          <div className="flex gap-4 justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="cursor-pointer"
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                className="cursor-pointer"
                disabled={completionPercentage < 100}
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="default"
                className="px-8 text-white cursor-pointer"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
