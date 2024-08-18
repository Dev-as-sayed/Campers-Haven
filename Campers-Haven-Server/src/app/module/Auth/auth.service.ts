import bcrypt from "bcrypt";
import { TLoginInfo, TUser } from "./auth.interface";
import { UsersModel } from "./auth.model";
import AppError from "../../error/AppError";
import httpStatus from "http-status";
import { createToken } from "./auth.utils";
import { config } from "../../config";

const registerUserOnDB = async (userData: Partial<TUser>) => {
  userData.role = "user";

  const emailExist = await UsersModel.findOne({ email: userData.email });
  const userNameExist = await UsersModel.findOne({
    username: userData.username,
  });

  if (emailExist) {
    throw new AppError(httpStatus.FOUND, "email alrady used");
  }

  if (userNameExist) {
    throw new AppError(httpStatus.FOUND, "user name alrady used");
  }

  const result = await UsersModel.create(userData);
  return result;
};

const loginUserOnDB = async (payloade: TLoginInfo) => {
  const { email, password, username } = payloade;

  const user = await UsersModel.findOne({ email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "Invelid identity");
  }
  if (user?.isDleted) {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    console.log("password dose not match");
    throw new AppError(httpStatus.NOT_FOUND, "Invalid email or password");
  }

  user.password = "";

  const jwtPayloade = {
    _id: user?._id,
    email: user?.email,
    role: user?.role,
  };

  const accessToken = createToken(
    jwtPayloade,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayloade,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  console.log(user, accessToken, refreshToken);

  return { user, accessToken, refreshToken };
};

export const AuthServices = {
  registerUserOnDB,
  loginUserOnDB,
};
