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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface MessageModalProps {
  open: boolean;
  onClose: () => void;
}

export default function MessageModal({ open, onClose }: MessageModalProps) {
  const [form, setForm] = useState({
    recipients: "",
    messageType: "",
    message: "",
    bulk: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSelectChange = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const handleCheckbox = (checked: boolean) =>
    setForm({ ...form, bulk: checked });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "📨 Message Sent",
    //   description: form.bulk
    //     ? `Bulk message dispatched to all recipients.`
    //     : `Message sent to ${form.recipients}.`,
    // });
    setForm({ recipients: "", messageType: "", message: "", bulk: false });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-background text-foreground border border-border shadow-lg">
        <DialogHeader>
          <DialogTitle>Create & Send Message</DialogTitle>
          <DialogDescription>
            Craft and dispatch your message to selected recipients.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center justify-between border rounded-md p-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="bulk"
                checked={form.bulk}
                onCheckedChange={(checked) =>
                  handleCheckbox(checked as boolean)
                }
              />
              <Label htmlFor="bulk">Send to all (Bulk Message)</Label>
            </div>
          </div>

          {!form.bulk && (
            <div className="space-y-2">
              <Label htmlFor="recipients">Recipients</Label>
              <Input
                id="recipients"
                name="recipients"
                placeholder="e.g. John, Mary, Alex"
                value={form.recipients}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label>Message Type</Label>
            <Select
              onValueChange={(v) => handleSelectChange("messageType", v)}
              value={form.messageType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="announcement">Announcement</SelectItem>
                <SelectItem value="reminder">Reminder</SelectItem>
                <SelectItem value="alert">Alert</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message Content</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="resize-none min-h-[120px]"
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
