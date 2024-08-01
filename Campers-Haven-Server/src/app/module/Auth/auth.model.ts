import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";
import { TUser } from "./auth.interface";
import { config } from "../../config";

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  email: { type: String, required: true },
  password: { type: String, required: true },
  number: { type: String, required: true },
  image: { type: String, required: true },
  orders: { type: [String], required: true },
  status: {
    type: String,
    enum: ["active", "block"],
    default: "active",
  },
  isDleted: { type: Boolean, default: false },
  address: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.BCRYPT_SOLT_OUNDS)
  );
  next();
});

export let UsersModel = mongoose.model("Users", userSchema);
