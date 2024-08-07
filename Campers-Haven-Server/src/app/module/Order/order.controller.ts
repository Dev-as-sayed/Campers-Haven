import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
  const orderInfo = req.body;

  const result = await OrderServices.createOrderOnDB(orderInfo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your oreder is confirmed",
    data: result,
  });
});

const getOrders = catchAsync(async (req, res) => {
  // const id = req.params.id;

  const { id } = req.query;

  const result = await OrderServices.getOrdersFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrive successfully!",
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getOrders,
};
