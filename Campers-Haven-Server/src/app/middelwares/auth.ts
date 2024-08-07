import httpStatus from "http-status";
import AppError from "../error/AppError";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config";
import { UsersModel } from "../module/Auth/auth.model";

const auth = () => {
  return catchAsync(async (req, res, next) => {
    const bearerToken = req.headers.authorization;
    const token = bearerToken?.split(" ")[1];

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized...!");
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;

    const { _id, email, role, iat, exp } = decoded;

    const user = await UsersModel.findById(_id);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "U");
    } else if (!(role === user.role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized...!");
    } else if (!(email === user.email)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized...!");
    }

    console.log(decoded);

    next();
  });
};

export default auth;
