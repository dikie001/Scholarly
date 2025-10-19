"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
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

export default function AddClassModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
    // Add logic or toast here if needed
    setForm({ className: "", classTeacher: "", gradeLevel: "", stream: "" });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-popover text-popover-foreground">
        <DialogHeader>
          <DialogTitle>Add Class</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new class.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* <div className="flex flex-col space-y-2">
            <Label htmlFor="className">Class Name</Label>
            <Input
              id="className"
              name="className"
              placeholder="e.g. Grade 9 Alpha"
              value={form.className}
              onChange={handleChange}
              required
            />
          </div>{" "} */}
          <div className="flex w-full gap-4 justify-center">
            <div className="flex flex-col space-y-2 w-full">
              <Label>Grade Level</Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("gradeLevel", value)
                }
                value={form.gradeLevel}
              >
                <SelectTrigger className="w-full">
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

            <div className="flex flex-col space-y-2 w-full">
              <Label>Stream</Label>
              <Select
                onValueChange={(value) => handleSelectChange("stream", value)}
                value={form.stream}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select stream" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
          <DialogFooter>
            <Button
              variant="default"
              type="submit"
              className="text-foreground w-full"
            >
              Save Class
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
