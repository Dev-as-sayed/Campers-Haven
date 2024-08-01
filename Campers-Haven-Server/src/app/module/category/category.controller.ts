import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./category.service";

const getCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.getCategoryFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully",
    data: result,
  });
});

const addCategory = catchAsync(async (req, res) => {
  const newCategory = req.body;
  const result = await CategoryServices.addCategoryOnDB(newCategory);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category added successfully",
    data: result,
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedInfo = req.body;

  const result = await CategoryServices.updateCategoryOnDB(id, updatedInfo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category updated successfully",
    data: result,
  });
});

export const CategoryController = {
  getCategory,
  addCategory,
  updateCategory,
};
