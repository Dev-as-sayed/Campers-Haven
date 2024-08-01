import { ObjectId, Types } from "mongoose";

type ProductStatus = "on-sell" | "off-sell" | "disabled";
type ProductOffers = "offerd" | "regular";

export type TProduct = {
  name: string;
  category: Types.ObjectId;
  description: string;
  images: string[];
  price: number;
  offers_price: number;
  stock_quantity: number;
  status: ProductStatus;
  offered: ProductOffers;
  total_sell: number;
  ratings: number;
};
