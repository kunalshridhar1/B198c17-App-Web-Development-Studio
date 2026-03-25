import Stripe from "stripe";
import { Request, Response } from "express";
import Product from "../models/Product";
import Order from "../models/Order";

// ✅ Initialize Stripe SAFELY
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const createCheckout = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // 🔥 Create Stripe line items
    const lineItems = await Promise.all(
      items.map(async (item: any) => {
        const product = await Product.findById(item.productId);

        // ✅ TypeScript-safe check
        if (!product) {
          throw new Error("Product not found");
        }

        return {
          price_data: {
            currency: "eur",
            product_data: {
              name: product.name?.en ?? "Unknown Product",
            },
            unit_amount: Math.round(product.priceEUR * 100),
          },
          quantity: item.quantity,
        };
      })
    );

    // 🔥 Create Stripe session
    const session = await stripe.checkout.sessions.create({
     payment_method_types: ["card"],
     line_items: lineItems,
     mode: "payment",
     success_url: `${process.env.CLIENT_URL}/success.html`,
     cancel_url: `${process.env.CLIENT_URL}/cancel.html`,

    metadata: {
      items: JSON.stringify(items) // 🔥 important
  }
});

    return res.json({ url: session.url });

  } catch (error) {
    console.error("❌ Checkout Error:", error);
    return res.status(500).json({ error: "Checkout failed" });
  }
};
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await (await import("../models/Order")).default
      .find()
      .sort({ createdAt: -1 });

    res.json({ orders });

  } catch (error) {
    console.error("❌ Fetch Orders Error:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};