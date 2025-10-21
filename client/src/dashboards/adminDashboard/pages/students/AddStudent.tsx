"use client";

import Navbar from "@/components/shared/Navbar";
import { AdminSideBar } from "@/components/shared/SideBar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { addStudentFormTypes } from "@/types/student.types";
import { BookOpen, Circle, User, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import { toast } from "sonner";

export default function StudentRegistration() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completion, setCompletion] = useState(0);
  const totalSteps = 4;
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [formData, setFormData] = useState<addStudentFormTypes>({
    firstName: "",
    lastName: "",
    dateOfBirth: undefined,
    gender: "",
    admissionNumber: undefined,
    grade: "",
    stream: "",
    parentName: "",
    parentEmail: "",
    parentAddress:"",
    parentPhone: undefined,
    alternatePhone: undefined,
    address: "",
    medicalInfo: "",
    previousSchool: "",
    residence: "",
  });

  const inputClass =
    "bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary";
  const selectClass =
    "bg-background border w-full border-border text-foreground focus:ring-2 focus:ring-primary";

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Save to residence
    if (name === "location") {
      return setFormData({ ...formData, residence: value });
    }else if(name === "address"){
      return setFormData({...formData, parentAddress:value})
    }

    // All the other data inputs
    setFormData({ ...formData, [name]: value });
  };

  //
  const handleSelectChange = (field: string, value: string) =>
    setFormData({ ...formData, [field]: value });

  // Fill in date to the formData
  useEffect(() => {
    setFormData((prev) => ({ ...prev, dateOfBirth: date?.toISOString() }));
    console.log(formData);
  }, [date]);

  // Navigate to te next Tab
  const handleNext = () => {
    if (
      currentStep === 0 &&
      (!formData.firstName ||
        !formData.lastName ||
        !formData.dateOfBirth ||
        !formData.gender)
    )
      return toast.error("Fill all personal info fields");

    if (
      currentStep === 1 &&
      (!formData.grade || !formData.stream || !formData.admissionNumber)
    )
      return toast.error("Fill all academic info fields");

    if (
      currentStep === 2 &&
      (!formData.parentName || !formData.parentPhone )
    )
      return toast.error("Fill all parent info fields");

    const newStep = currentStep + 1;
    setCurrentStep(newStep);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      setCompletion(Math.round(((newStep + 1) / totalSteps) * 100));
    }
  };

  const handleSubmit = () => {
    toast.success("Student registration submitted!");
    console.log(formData);
  };

  const steps = [
    { label: "Personal", icon: <User className="w-4 h-4" /> },
    { label: "Academic", icon: <BookOpen className="w-4 h-4" /> },
    { label: "Parent", icon: <Users className="w-4 h-4" /> },
    { label: "Medical", icon: <Circle className="w-4 h-4" /> },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" /> Personal Information
              </CardTitle>
              <CardDescription>
                Enter student's personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name *</Label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Last Name *</Label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full cursor-pointer justify-start text-left"
                      >
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>Gender *</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(val) => handleSelectChange("gender", val)}
                  >
                    <SelectTrigger className={selectClass}>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Male", "Female", "Other"].map((g) => (
                        <SelectItem key={g} value={g}>
                          {g}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label>Place of Residence *</Label>
                  <Input
                    name="location"
                    value={formData.residence}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
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
              <CardDescription>Grade, stream, admission number</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Grade *</Label>
                  <Select
                    value={formData.grade}
                    onValueChange={(val) => handleSelectChange("grade", val)}
                  >
                    <SelectTrigger className="w-full cursor-pointer">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        { length: 4 },
                        (_, i) => `Grade ${i + 6}`
                      ).map((g) => (
                        <SelectItem key={g} value={g}>
                          {g}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Stream/Class *</Label>
                  <Select
                    value={formData.stream}
                    onValueChange={(val) => handleSelectChange("stream", val)}
                  >
                    <SelectTrigger className="w-full cursor-pointer">
                      <SelectValue placeholder="Select stream" />
                    </SelectTrigger>
                    <SelectContent>
                      {["A", "B", "C", "D"].map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Admission Number *</Label>
                  <Input
                    name="admissionNumber"
                    value={formData.admissionNumber}
                    placeholder="14572"
                    onChange={handleInputChange}
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
                <Users className="w-5 h-5" /> Parent/Guardian Info
              </CardTitle>
              <CardDescription>
                Contact details of parent/guardian
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Parent/Guardian Name *</Label>
                  <Input
                    name="parentName"
                    value={formData.parentName}
                    placeholder="john doe"
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email (Optional)</Label>
                  <Input
                    name="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    placeholder="johndoe@gmail.com"
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone *</Label>
                  <Input
                    name="parentPhone"
                    value={formData.parentPhone}
                    placeholder="+254712345678"
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label>
                    Address{" "}
                    <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    name="address"
                    value={formData.parentAddress}
                    placeholder="PO BOX 12300"
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Circle className="w-5 h-5" /> Medical Info
              </CardTitle>
              <CardDescription>
                Allergies, conditions, special needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                name="medicalInfo"
                value={formData.medicalInfo}
                onChange={handleInputChange}
                placeholder="Medical information (optional)"
                className={inputClass + " min-h-24"}
              />
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-background w-full">
      <AdminSideBar />
      <div className="flex-1">
        <Navbar pageName="Add Student" />
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          {/* Modern Stepper UI */}
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center ${
                    i <= currentStep ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                      i <= currentStep
                        ? "border-primary bg-primary/10"
                        : "border-border bg-muted"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs mt-1 font-medium">{step.label}</span>
                </div>
              ))}
            </div>
            <div className="absolute top-5 left-0 w-full h-[2px] bg-muted -z-10" />
            <div
              className="absolute top-5 left-0 h-[2px] bg-primary transition-all -z-10"
              style={{
                width: `${(currentStep / (totalSteps - 1)) * 100}%`,
              }}
            />
          </div>

          {renderStepContent()}

          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            {currentStep === 3 ? (
              <Button
                className="cursor-pointer text-foreground px-6"
                onClick={handleSubmit}
                disabled={completion < 100}
              >
                Submit
              </Button>
            ) : (
              <Button
                className="cursor-pointer text-foreground px-6"
                onClick={handleNext}
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
