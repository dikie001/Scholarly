import { Router } from "express";
import { appendFile } from "fs";
import authRoutes from "./auth.routes.js";

const router: Router = Router();

router.use("/auth", authRoutes);

export default router;
