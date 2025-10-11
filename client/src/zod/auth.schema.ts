import z from 'zod';

// Student Schema
export const studentSchema= z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    admissionNumber:z.number().int().positive().min(1, "Admission number is required"),
    password:z.string().min(6, "Create a password with 6 or more characters")
})


export const facultySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.number().int().positive(),
  email: z.email('Invalid email'),
  password: z.string().min(6, "Create a password with 6 or more characters"),
});

export const parentSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.number().int().positive(),
  password: z.string().min(6, "Create a password with 6 or more characters"),
});