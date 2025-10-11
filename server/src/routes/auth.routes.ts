import { Router } from "express";
import { registerStudent } from "../controllers/auth.controller.js";

const router:Router = Router()

router.post("/register", registerStudent)

export default router