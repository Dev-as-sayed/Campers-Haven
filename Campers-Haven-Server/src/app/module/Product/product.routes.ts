import { Router } from "express";
import { ProductController } from "./product.controller";

const route = Router();

route.post("/add-product", ProductController.addProduct);
route.get("/get-products", ProductController.getProuduct);
route.get("/:id", ProductController.getSingleProduct);

export const ProductRouter = route;
