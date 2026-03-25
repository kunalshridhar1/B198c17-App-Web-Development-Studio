import express from "express";
import { createCheckout, getOrders } from "../controllers/orders";

const router = express.Router();

router.post("/checkout", createCheckout);
router.get("/", getOrders); // Optional: to list all orders (for admin or user order history)   

export default router;