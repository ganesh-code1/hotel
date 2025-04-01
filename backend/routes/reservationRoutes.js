import express from "express";
import { createReservation, getRestaurantName, getAllReservation } from "../controllers/reservationController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/book", createReservation);
router.get("/:slug", getRestaurantName);
router.get("", authMiddleware, getAllReservation);

export default router;