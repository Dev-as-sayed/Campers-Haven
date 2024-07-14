type ProductStatus = "on-sell" | "off-sell";

export type TProduct = {
  name: string;
  description: string;
  price: number;
  offers_price: number;
  stock_quantity: number;
  status: ProductStatus;
  offered: boolean;
  total_sell: number;
};
