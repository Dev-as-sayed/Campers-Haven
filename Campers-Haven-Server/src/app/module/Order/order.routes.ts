import { Router } from "express";
import { OrderController } from "./order.controller";
import auth from "../../middelwares/auth";

const route = Router();

route.post("/creacte-order", auth(), OrderController.createOrder);
route.get("/get-orders", OrderController.getOrders);

export const OrderRouter = route;
