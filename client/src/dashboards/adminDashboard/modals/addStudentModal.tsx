import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";

interface AddStudentModalProps {
  open: boolean;
  onClose: () => void;
}

const AddStudentModal = ({ open, onClose }: AddStudentModalProps) => {
  const handleSubmit = () => {
    alert("Student saved successfully!");
    onClose()
  };

  return (
    <Dialog open={open} onOpenChange={()=>onClose()} >
      <DialogContent className="lg:!w-[900px] !max-w-[98vw] w-full p-0  " >
        <Card className="border-none shadow-none w-full  ">
          <CardHeader>
            <CardTitle className="text-2xl">Add New Student</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6" >
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="guardian">Guardian</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admission">Admission Number *</Label>
                    <Input id="admission" placeholder="ADM/2025/001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="academic" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="class">Class Level *</Label>
                    <Input id="class" placeholder="Grade 9" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stream">Stream</Label>
                    <Input id="stream" placeholder="9A" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admdate">Admission Date</Label>
                    <Input id="admdate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prevschool">Previous School</Label>
                    <Input id="prevschool" placeholder="ABC High School" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="guardian" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gname">Guardian Name *</Label>
                    <Input id="gname" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relation">Relationship</Label>
                    <Input id="relation" placeholder="Mother" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gphone">Phone *</Label>
                    <Input id="gphone" placeholder="+254712345678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gemail">Email</Label>
                    <Input
                      id="gemail"
                      type="email"
                      placeholder="parent@example.com"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="other" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="medical">Medical Condition</Label>
                    <Input id="medical" placeholder="None" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency">Emergency Contact</Label>
                    <Input id="emergency" placeholder="Name & Phone" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="remarks">Additional Remarks</Label>
                  <Textarea id="remarks" placeholder="Any notes..." rows={4} />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex gap-3 justify-end mt-6 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => onClose()}
              >
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Save Student</Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentModal;
