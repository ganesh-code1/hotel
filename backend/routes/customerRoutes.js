import express from "express";
import { getAllCustomers, getCustomerOrders } from "../controllers/customerController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/orders/:customerId", authMiddleware, getCustomerOrders);
router.get("", authMiddleware, getAllCustomers);

export default router;