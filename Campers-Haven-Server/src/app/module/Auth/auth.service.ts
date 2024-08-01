import { TUser } from "./auth.interface";
import { UsersModel } from "./auth.model";

const registerUserOnDB = async (userData: Partial<TUser>) => {
  userData.role = "user";

  const emailExist = await UsersModel.findOne({ email: userData.email });

  if (emailExist) {
    throw new Error("email alrady used");
  }

  const result = await UsersModel.create(userData);
  return result;
};

export const AuthServices = {
  registerUserOnDB,
};
