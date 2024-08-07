import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const registerUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await AuthServices.registerUserOnDB(userData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const userInfo = req.body;

  const result = await AuthServices.loginUserOnDB(userInfo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login vaification is successful",
    data: result,
  });
});

export const AuthConroller = {
  registerUser,
  loginUser,
};
