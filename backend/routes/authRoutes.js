import express from "express";
import {
  register,
  login,
  verifyToken,  
} from "../controllers/authController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify-token", authMiddleware, verifyToken);

export default router;