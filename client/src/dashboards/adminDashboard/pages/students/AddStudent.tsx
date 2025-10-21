"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

// --- 1. DEFINE VALIDATION SCHEMA ---
// We define a detailed schema using Zod for validation.
const formSchema = z.object({
  // --- Student Details ---
  firstName: z.string().min(2, "First name is required"),
  middleName: z.string().optional(),
  surname: z.string().min(2, "Surname is required"),
  dob: z.date({ required_error: "Date of birth is required." }),
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required.",
  }),
  nationality: z.string().min(2, "Nationality is required"),
  religion: z.string().min(2, "Religion is required"),
  religiousEducation: z.enum(["cre", "ire", "hre"], {
    required_error: "Please select a RE option.",
  }),

  // --- Academic Info ---
  kpseaIndex: z
    .string()
    .length(11, "KPSEA Index must be 11 characters"),
  previousSchool: z.string().min(1, "Previous school is required"),
  entryGrade: z.string().min(1, "Entry grade is required"), // e.g., Grade 7
  cbcPathway: z.enum(["stem", "arts_sports", "social_sciences"], {
    required_error: "CBC Pathway is required.",
  }),

  // --- Parent/Guardian Info ---
  parentFullName: z.string().min(1, "Parent/Guardian name is required"),
  parentRelationship: z
    .string()
    .min(1, "Relationship to student is required"),
  parentPhone: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),
  parentEmail: z.string().email("Invalid email address").optional(),
  parentNationalId: z
    .string()
    .min(7, "National ID must be 7-8 digits")
    .max(8),
  homeAddress: z.string().min(1, "Home address is required"),
  homeCounty: z.string().min(1, "Home county is required"),

  // --- Emergency Contact ---
  emergencyContactName: z
    .string()
    .min(1, "Emergency contact name is required"),
  emergencyContactPhone: z
    .string()
    .min(10, "Emergency phone is required"),

  // --- Health Info ---
  hasSpecialNeeds: z.enum(["yes", "no"]),
  specialNeedsDetails: z.string().optional(),
  hasAllergies: z.enum(["yes", "no"]),
  allergiesDetails: z.string().optional(),

  // --- Document Uploads ---
  // Zod's file validation is complex. For simplicity, we check for 'any' file.
  // In a real app, you'd check file type and size.
  birthCertificate: z.any().refine((files) => files?.length >= 1, "Birth Certificate is required."),
  kpseaResultSlip: z.any().refine((files) => files?.length >= 1, "KPSEA Result Slip is required."),
  
});

// Mock data for dropdowns
const counties = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", 
  "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", 
  "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", 
  "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", 
  "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", 
  "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", 
  "Taita Taveta", "Tana River", "Tharaka Nithi", "Trans Nzoia", 
  "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
];


// --- 2. CREATE THE FORM COMPONENT ---
export function StudentRegistrationForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      surname: "",
      nationality: "Kenyan",
      religion: "Christian",
      kpseaIndex: "",
      previousSchool: "",
      entryGrade: "Grade 7",
      parentFullName: "",
      parentRelationship: "",
      parentPhone: "",
      parentEmail: "",
      parentNationalId: "",
      homeAddress: "",
      homeCounty: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      hasSpecialNeeds: "no",
      specialNeedsDetails: "",
      hasAllergies: "no",
      allergiesDetails: "",
    },
  });
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Show loader
    setIsLoading(true);

    // Simulate API call
    console.log("Form Submitted!", values);
    
    // In a real app, you would POST this data to your API
    // and handle file uploads.
    setTimeout(() => {
      setIsLoading(false);
      alert("Student Registered Successfully!");
      form.reset();
    }, 2000);
  }

  // --- 3. RENDER THE FORM ---
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          {/* --- SECTION 1: STUDENT DETAILS --- */}
          <Card>
            <CardHeader>
              <CardTitle>Student's Personal Details</CardTitle>
              <CardDescription>
                Enter the student's information as it appears on their official
                documents.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Middle Name (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Mwangi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Surname</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() ||
                              date < new Date("2000-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4 pt-2"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal">Female</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nationality</FormLabel>
                      <FormControl>
                        <Input placeholder="Kenyan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="religion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Religion</FormLabel>
                      <FormControl>
                        <Input placeholder="Christian" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="religiousEducation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Religious Education (RE)</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select RE option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cre">
                            Christian Religious Education (CRE)
                          </SelectItem>
                          <SelectItem value="ire">
                            Islamic Religious Education (IRE)
                          </SelectItem>
                          <SelectItem value="hre">
                            Hindu Religious Education (HRE)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* --- SECTION 2: ACADEMIC INFORMATION --- */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
              <CardDescription>
                Provide the student's academic history and pathway choice.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="kpseaIndex"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>KPSEA Index Number</FormLabel>
                      <FormControl>
                        <Input placeholder="12345678901" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="previousSchool"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Primary School</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., St. Mary's Primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="entryGrade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade Admitted To</FormLabel>
                      <FormControl>
                        <Input placeholder="Grade 7" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cbcPathway"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Intended CBC Pathway</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a pathway" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="stem">
                            Science, Technology, Engineering & Maths (STEM)
                          </SelectItem>
                          <SelectItem value="arts_sports">
                            Arts & Sports Science
                          </SelectItem>
                          <SelectItem value="social_sciences">
                            Social Sciences (Humanities)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* --- SECTION 3: PARENT / GUARDIAN --- */}
          <Card>
            <CardHeader>
              <CardTitle>Parent / Guardian Information</CardTitle>
              <CardDescription>
                Details of the primary parent or guardian.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="parentFullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parentRelationship"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relationship to Student</FormLabel>
                      <FormControl>
                        <Input placeholder="Mother" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="parentPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="0712345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parentEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="jane.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parentNationalId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>National ID Number</FormLabel>
                      <FormControl>
                        <Input placeholder="12345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="homeAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Home Address</FormLabel>
                      <FormControl>
                        <Input placeholder="P.O. Box 123 - 00100" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="homeCounty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Home County</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a county" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {counties.map((county) => (
                            <SelectItem key={county} value={county}>
                              {county}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* --- SECTION 4: EMERGENCY CONTACT --- */}
          <Card>
            <CardHeader>
              <CardTitle>Emergency Contact / Next of Kin</CardTitle>
              <CardDescription>
                Person to contact in case of an emergency (can be different from
                parent).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="emergencyContactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Mark Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emergencyContactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="0787654321" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* --- SECTION 5: HEALTH & SPECIAL NEEDS --- */}
          <Card>
            <CardHeader>
              <CardTitle>Health & Special Needs</CardTitle>
              <CardDescription>
                This information will be kept confidential.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="hasAllergies"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Does the student have any allergies?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* This field appears conditionally */}
              {form.watch("hasAllergies") === "yes" && (
                <FormField
                  control={form.control}
                  name="allergiesDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Please provide allergy details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Peanuts, dust, penicillin"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
              <FormField
                control={form.control}
                name="hasSpecialNeeds"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Does the student have any special needs?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* This field appears conditionally */}
              {form.watch("hasSpecialNeeds") === "yes" && (
                <FormField
                  control={form.control}
                  name="specialNeedsDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Please provide details of special needs</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Visual impairment, dyslexia"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </CardContent>
          </Card>
          
          {/* --- SECTION 6: DOCUMENT UPLOADS --- */}
          <Card>
            <CardHeader>
              <CardTitle>Document Uploads</CardTitle>
              <CardDescription>
                Upload copies of the required documents.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="birthCertificate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Birth Certificate</FormLabel>
                    <FormControl>
                      <Input 
                        type="file" 
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => field.onChange(e.target.files)}
                      />
                    </FormControl>
                    <FormDescription>
                      A clear copy or scan. PDF, JPG, or PNG.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="kpseaResultSlip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>KPSEA Result Slip</FormLabel>
                    <FormControl>
                       <Input 
                        type="file" 
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => field.onChange(e.target.files)}
                      />
                    </FormControl>
                    <FormDescription>
                      A clear copy or scan of the official KPSEA report.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* --- SUBMIT BUTTON --- */}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Register Student"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}