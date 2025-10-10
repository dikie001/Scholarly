import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { configDotenv } from "dotenv";


const db = drizzle(process.env.DATABASE_URL!);

import express from "express";

configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Server is live...");
});

app.listen(PORT, () => {
  console.log(`Server live in http://localhost:${PORT}`);
});