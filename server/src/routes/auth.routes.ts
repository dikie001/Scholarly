import { Router } from "express";
import { login, register, registerStudent } from "../controllers/auth.controller.js";

const router:Router = Router()

router.post("/register", register)
router.post("/login", login)

export default router