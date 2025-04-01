import express from "express";
import {
  createOrder,
  getOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("", createOrder);
router.get("", authMiddleware, getOrders);
router.put("/:orderId/status", authMiddleware, updateOrderStatus);

export default router;