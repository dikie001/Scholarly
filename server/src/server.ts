import "dotenv/config";
import { configDotenv } from "dotenv";


import express from "express";
import { connectDB } from "./config/db.js";


configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect MongoDB
connectDB()


app.get("/", async (req, res) => {
  console.log("Server is live...");
});

app.listen(PORT, () => {
  console.log(`Server live in http://localhost:${PORT}`);
});
