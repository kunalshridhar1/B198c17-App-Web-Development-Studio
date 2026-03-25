import express from "express";
import { handleWebhook } from "../controllers/webhookController";

const router = express.Router();

// ⚠️ RAW body required for Stripe
router.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  handleWebhook
);

export default router;