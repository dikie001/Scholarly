import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { hashPassword } from "../utils/auth.utils.js";

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  admissionNumber: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
});

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hashPassword(this.password);
  next();
});

export const student = mongoose.model("student", studentSchema);