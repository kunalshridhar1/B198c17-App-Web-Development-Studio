import dotenv from "dotenv";
dotenv.config(); // ⚠️ MUST BE FIRST
import webhookRoutes from "./routes/webhookRoutes";

// ⚠️ IMPORTANT: before express.json()
import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();

// Middleware
app.use(cors());
app.use("/api/webhook", webhookRoutes);
app.use(express.json());

// Debug (optional)
console.log("ENV CHECK:", process.env.STRIPE_SECRET_KEY);

// DB Connection
connectDB();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🚀 API Running...");
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});