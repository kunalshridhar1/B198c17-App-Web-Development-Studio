import { Request, Response } from "express";
import Stripe from "stripe";
import Order from "../models/Order";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const handleWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"] as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    console.log("❌ Webhook signature failed");
    return res.status(400).send("Webhook Error");
  }

  // ✅ Payment success
  if (event.type === "checkout.session.completed") {
    const session: any = event.data.object;

    const items = JSON.parse(session.metadata.items);

    await new Order({
      items,
      total: session.amount_total / 100,
      paymentStatus: "paid",
      stripeSessionId: session.id
    }).save();

    console.log("✅ Order saved!");
  }

  res.json({ received: true });
};