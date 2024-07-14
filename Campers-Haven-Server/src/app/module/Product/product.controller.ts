import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ProductServices } from "./product.service";

const addProduct = catchAsync(async (req, res) => {
  const newProduct = req.body;

  const result = await ProductServices.addProductOnDB(newProduct);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

const getProuduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getProductFormDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result,
  });
});
export const ProductController = {
  addProduct,
  getProuduct,
};
