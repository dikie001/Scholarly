import z from 'zod';

// Student Schema
export const studentSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  admissionNumber: z.coerce
    .number("Admission number must be a valid number")
    .int("Admission number must be an integer")
    .positive('')
    .min(1, "Admission number is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});


export const facultySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.coerce
    .number("Phone number must be a valid number")
    .int()
    .positive("Phone number must be positive"),
  email: z.email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const parentSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.coerce
    .number("Phone number must be a valid number")
    .int()
    .positive("Phone number must be positive"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});