import express from "express";
import {getRestaurantSettings, putRestaurantSettings} from "../controllers/settingsController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("", authMiddleware, getRestaurantSettings);
router.put("", authMiddleware, putRestaurantSettings);

export default router;