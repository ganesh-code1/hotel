import express from "express";
import {
  createOffer,
  deleteOffer,
  updateOffer,
  getOffers,
  verifyCoupon,
} from "../controllers/offerController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("", authMiddleware, createOffer);
router.delete("/:id", authMiddleware, deleteOffer);
router.put("/:id", authMiddleware, updateOffer);
router.get("", authMiddleware, getOffers);
router.post("/verify-coupon", verifyCoupon);

export default router;