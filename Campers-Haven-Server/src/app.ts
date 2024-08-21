import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

//routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("CAMPER HAVEN server is running");
});

export default app;
