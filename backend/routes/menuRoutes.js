import express from "express";
import { saveMenu, getMenu, getMenuBySlug } from "../controllers/menuController.js";
import { upload } from "../config/uploadConfig.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("", authMiddleware, upload.array("itemImages"), saveMenu);  
router.get("", authMiddleware, getMenu);
router.get("/:restaurantSlug", getMenuBySlug);

export default router;