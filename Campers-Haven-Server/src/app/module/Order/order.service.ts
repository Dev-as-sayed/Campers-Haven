import { ObjectId } from "mongoose";
import { ProductModel } from "../Product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderOnDB = async (orderInfo: TOrder) => {
  orderInfo.status = "panding";

  const result = await OrderModel.create(orderInfo);

  return result;
};

const getOrdersFromDB = async (_id: string | undefined) => {
  let quary = {};
  if (_id) {
    quary = { _id };
  }

  const result = await OrderModel.find(quary).populate({
    path: "products.product_id",
    model: "Products",
  });
  return result;
};

export const OrderServices = {
  createOrderOnDB,
  getOrdersFromDB,
};
