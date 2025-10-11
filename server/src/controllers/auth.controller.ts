import type { Request, Response } from "express";
import { student } from "../models/student.model.js";

// Registration for a new student
export const registerStudent = async (req: Request, res: Response) => {
  try {
    const { fullName, admissionNumber, password } = req.body;
    const existingStudent = await student.findOne({ admissionNumber });
    if (existingStudent)
      return res.status(400).json({ error: "Admission number exists" });

    const newStudent = new student({fullName,admissionNumber,password})
    await newStudent.save()

  } catch (err) {
    console.log("Error from auth.controller", err);
  }
};
