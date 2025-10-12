import mongoose from "mongoose";
import { hashPassword } from "../utils/auth.utils.js";

const facultySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  staffId: { type: String, required: true, unique: true },
});

// Presave actions
facultySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hashPassword(this.password);
  next();
});

export const faculty = mongoose.model("faculty", facultySchema);
