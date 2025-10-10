import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { configDotenv } from "dotenv";

const db = drizzle(process.env.DATABASE_URL!);

import express from "express";
import { usersTable } from "./drizzle/schema.js";
import { uuid } from "drizzle-orm/pg-core";

configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

const user: typeof usersTable.$inferInsert = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

app.get("/", async (req, res) => {
  console.log("Server is live...");
  const allUsers = await db.insert(usersTable).values(user);
  console.log(allUsers);
});

app.listen(PORT, () => {
  console.log(`Server live in http://localhost:${PORT}`);
});
