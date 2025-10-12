import mongoose from "mongoose";
import { hashPassword } from "../utils/auth.utils.js";

const parentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
});

// Presave actions
parentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hashPassword(this.password);
  next();
});

export const parent = mongoose.model("parent", parentSchema);