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
  const quarys = req.query;

  const result = await ProductServices.getProductFormDB(quarys);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const productId = req.params.id;

  console.log("hit the get Single porduct api");

  console.log(productId);

  const result = await ProductServices.getSingleProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single product retrieved successfully",
    data: result,
  });
});
export const ProductController = {
  addProduct,
  getProuduct,
  getSingleProduct,
};
