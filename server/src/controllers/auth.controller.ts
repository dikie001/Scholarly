import type { Request, Response } from "express";
import { student } from "../models/student.model.js";

// Registration for a new student
export const registerStudent = async (req: Request, res: Response) => {
  try {
    const { fullName, admissionNumber, password } = req.body;
    const existingStudent = await student.findOne({ admissionNumber });
    if (existingStudent){
            console.log("admission exists");

      return res.status(400).json({ error: "Admission number exists" });
    }

    const newStudent = new student({ fullName, admissionNumber, password });
    await newStudent.save();
    console.log(`New student account registered`);
    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    console.log("Error from auth.controller", err);
  }
};
