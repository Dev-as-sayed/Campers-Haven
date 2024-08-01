import mongoose, { Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    price: { type: Number, required: true },
    offers_price: { type: Number, required: true },
    stock_quantity: { type: Number, required: true },
    status: {
      type: String,
      enum: ["on-sell", "off-sell"],
      default: "on-sell",
    },
    offered: { type: String, enum: ["offerd", "regular"], default: "regular" },
    total_sell: { type: Number, required: true },
    ratings: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model("Products", productSchema);
