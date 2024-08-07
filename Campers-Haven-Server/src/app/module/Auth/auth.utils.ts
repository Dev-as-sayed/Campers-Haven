import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const createToken = (
  jwtPayloade: { email: string; role: string; _id: Types.ObjectId },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayloade, secret, { expiresIn });
};
