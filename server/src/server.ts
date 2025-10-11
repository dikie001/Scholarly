import "dotenv/config";
import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import routes from "./routes/index.js"



configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

// Connect MongoDB
connectDB()

// mount all routes
app.use("/api", routes)

app.listen(PORT, () => {
  console.log(`Server live in http://localhost:${PORT}`);
});
