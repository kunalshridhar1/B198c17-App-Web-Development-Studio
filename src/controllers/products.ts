import { Request, Response } from "express";
import Product from "../models/Product";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json({ products });
};

export const createProduct = async (req: Request, res: Response) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};