import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true },
    de: { type: String }
  },
  priceEUR: { type: Number, required: true },
  images: [String],
  category: {
    en: String,
    de: String
  },
  stock: { type: Number, default: 10 }
});

export default mongoose.model("Product", productSchema);