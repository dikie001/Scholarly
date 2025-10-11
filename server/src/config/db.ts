import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();
const CONNECTION_STRING = process.env.CONNECTION_STRING;

export const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING as string);
    console.log("MongoDB conected!");
  } catch (err) {
    console.log("MongoDB connection error!", err);
  }
};
