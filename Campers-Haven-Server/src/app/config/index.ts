import dotenv from "dotenv";

dotenv.config();

export const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  BCRYPT_SOLT_OUNDS: process.env.BCRYPT_SOLT_OUNDS,
};
