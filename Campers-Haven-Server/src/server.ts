import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/config";
import { Server } from "http";

let server: Server;

main().catch((err) => console.log(err));

async function main(): Promise<void> {
  try {
    await mongoose.connect(config.DB_URL as string);
    server = app.listen(config.PORT as string, () => {
      console.log(`Example app listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.log({
      message: "Error connecting to server",
      err,
    });
  }
}

process.on("unhandledRejection", () => {
  console.log(`Unhandled rejection is detected. Shutting down...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(`Uncaught exception is detected. Shutting down...`);
  process.exit(1);
});
