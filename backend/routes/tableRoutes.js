import express from "express";
import { getAllTables, addTable, updateTable, deleteTable } from "../controllers/tableController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("", authMiddleware, getAllTables);
router.post("", authMiddleware, addTable);
router.put("/:tableId", authMiddleware, updateTable);
router.delete("/:tableId", authMiddleware, deleteTable);

export default router;