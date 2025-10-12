import type { Request, Response } from "express";
import { student } from "../models/student.model.js";
import { faculty } from "../models/faculty.model.js";
import { parent } from "../models/parent.model.js";
import { comparePassword } from "../utils/auth.utils.js";
import type { studentRecordTypes } from "../types/auth.types.js";

// Registration for a new student
export const registerStudent = async (req: Request, res: Response) => {
  try {
    const { fullName, admissionNumber, password } = req.body;
    const existingStudent = await student.findOne({ admissionNumber });
    if (existingStudent) {
      console.log("admission exists");

      return res.status(400).json({ error: "Admission number exists" });
    }

    const newStudent = new student({ fullName, admissionNumber, password });
    await newStudent.save();
    console.log(`New student account registered`);
    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    console.log("Error from auth.controller.student", err);
  }
};

// Registration for a new faculty
export const registerFaculty = async (req: Request, res: Response) => {
  try {
    const { fullName, phoneNumber, email, password } = req.body;
    // Check if email exists
    const existingFacultyEmail = await faculty.findOne({ email });
    if (existingFacultyEmail) {
      console.log("Email exists");
      return res.status(400).json({ error: "faculty email exists" });
    }

    // Check if phone Number exists in db
    const existingFacultyNumber = await faculty.findOne({ phoneNumber });
    if (existingFacultyNumber) {
      return res.status(400).json({ error: "faculty number exists" });
    }

    // Assign Unique ids to faculty
    const firstBit = fullName.split(" ")[0].slice(0, 3).toUpperCase();
    const secondBit = fullName.split(" ")[1].slice(0, 1).toUpperCase() || "A";
    const lastBit = Math.floor(1000 + Math.random() * 9000);
    const staffId = `T${firstBit}${secondBit}-${lastBit}`;

    const newfaculty = new faculty({
      fullName,
      phoneNumber,
      email,
      password,
      staffId,
    });
    await newfaculty.save();
    console.log(`New faculty account registered`);
    res.status(201).json({ message: "faculty registered successfully" });
  } catch (err) {
    console.log("Error from auth.controller.faculty", err);
  }
};

// Registration for a new parent
export const registerParent = async (req: Request, res: Response) => {
  try {
    const { fullName, phoneNumber, password } = req.body;

    // Check if phone Number exists in db
    const existingParentNumber = await parent.findOne({ phoneNumber });
    if (existingParentNumber) {
      return res.status(400).json({ error: "parent number exists" });
    }

    const newParent = new parent({ fullName, phoneNumber, password });
    await newParent.save();
    console.log(`New parent account registered`);
    res.status(201).json({ message: "parent registered successfully" });
  } catch (err) {
    console.log("Error from auth.controller.parent", err);
  }
};

// Figure out which schema to use for registration based on role
export const register = (req: Request, res: Response) => {
  const { role } = req.body;

  // Assign controller functions based on role
  if (role === "student") return registerStudent(req, res);
  if (role === "faculty") return registerFaculty(req, res);
  if (role === "parent") return registerParent(req, res);
};

// Authenticate students
export const authenticateStudent = async (req: Request, res: Response) => {
  const { identifier, password }: { identifier: string; password: string } =
    req.body;
  let studentRecord: studentRecordTypes;

  // Validate the identifier, check if exists a student with the admissioin number
  if (identifier && !password) {
    studentRecord = await student.findOne({
      admissionNumber: identifier,
    });
    if (studentRecord) {
      res
        .status(200)
        .json({ message: "student exists", fullName: studentRecord.fullName });
    } else if (!studentRecord) {
      res.status(200).json({ message: "not found" });
    }
    console.log(studentRecord);
  }

  // Validate the password
  if (identifier && password) {
    try {
      studentRecord = await student.findOne({
        admissionNumber: identifier,
      });
      if (!studentRecord)
        return res.status(400).json({ message: "record not found!" });

      // Compare password with hashed pass in db
      const isPasswordValid = await comparePassword(
        password,
        studentRecord?.password
      );

      console.log("validity", isPasswordValid);
      if (!isPasswordValid)
        return res.status(400).json({ message: "wrong password" });

      if (isPasswordValid)
        res.status(200).json({ message: "correct password", studentRecord });
      console.log(isPasswordValid);
    } catch (err) {
      console.log("error from auth.controller.studentlogin:", err);
    }
  }
};

// Authenticate faculty
export const authenticateFaculty = async (req: Request, res: Response) => {
  const { identifier, password }: { identifier: string; password: string } =
    req.body;
  let studentRecord: studentRecordTypes;

  // Validate the identifier, check if exists a student with the admissioin number
  if (identifier && !password) {
    studentRecord = await student.findOne({
      admissionNumber: identifier,
    });
    if (studentRecord) {
      res.status(200).json({ message: "student exists" });
    } else if (!studentRecord) {
      res.status(200).json({ message: "not found" });
    }
    console.log(studentRecord);
  }

  // Validate the password
  if (identifier && password) {
    try {
      studentRecord = await student.findOne({
        admissionNumber: identifier,
      });
      if (!studentRecord)
        return res.status(400).json({ message: "record not found!" });

      // Compare password with hashed pass in db
      const isPasswordValid = await comparePassword(
        password,
        studentRecord?.password
      );

      console.log("validity", isPasswordValid);
      if (!isPasswordValid)
        return res.status(400).json({ message: "wrong password" });

      if (isPasswordValid)
        res.status(200).json({ message: "correct password", studentRecord });
      console.log(isPasswordValid);
    } catch (err) {
      console.log("error from auth.controller.studentlogin:", err);
    }
  }
};
// Figure out the role for allocating controllers
export const login = (req: Request, res: Response) => {
  const { role } = req.body;
  if (role === "student") authenticateStudent(req, res);
};
