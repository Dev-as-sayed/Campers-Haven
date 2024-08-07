type Product = {
  product_id: string;
  quantity: number;
};

export type TOrder = {
  // order_id: string;
  user_id: string;
  products: Product[];
  total_price: number;
  status?: "panding" | "deliverd";
  order_date: string;
};
