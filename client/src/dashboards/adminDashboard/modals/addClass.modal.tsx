"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
// import { toast } from "@/components/ui/use-toast";

export default function AddClassModal() {
  const [form, setForm] = useState({
    className: "",
    classTeacher: "",
    gradeLevel: "",
    stream: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "✅ Class Added Successfully",
    //   description: `${form.className} (${form.gradeLevel}) created.`,
    // });
    setForm({ className: "", classTeacher: "", gradeLevel: "", stream: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/80">Add Class</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-popover text-popover-foreground">
        <DialogHeader>
          <DialogTitle>Add Class</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new class.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="className">Class Name</Label>
            <Input
              id="className"
              name="className"
              placeholder="e.g. Grade 9 Alpha"
              value={form.className}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="classTeacher">Class Teacher</Label>
            <Input
              id="classTeacher"
              name="classTeacher"
              placeholder="e.g. Mr. Dickens"
              value={form.classTeacher}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label>Grade Level</Label>
            <Select
              onValueChange={(value) => handleSelectChange("gradeLevel", value)}
              value={form.gradeLevel}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Grade 7">Grade 7</SelectItem>
                <SelectItem value="Grade 8">Grade 8</SelectItem>
                <SelectItem value="Grade 9">Grade 9</SelectItem>
                <SelectItem value="Grade 10">Grade 10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-2">
            <Label>Stream</Label>
            <Select
              onValueChange={(value) => handleSelectChange("stream", value)}
              value={form.stream}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select stream" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="C">C</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full">
              Save Class
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
