import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";

const ProductSchema: Schema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: "Products", required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new Schema<TOrder>({
  // order_id: {
  //   type: String,
  //   required: true,
  // },
  user_id: {
    type: String,
    required: true,
  },
  products: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  total_price: {
    type: Number,
    require: true,
  },
  status: { type: String, enum: ["panding", "deliverd"], default: "panding" },
  order_date: {
    type: String,
    required: true,
  },
});

export const OrderModel = mongoose.model("Orders", orderSchema);
