import { Router } from "express";
import { CategoryController } from "./category.controller";

const route = Router();
route.get("/get-category", CategoryController.getCategory);
route.post("/add-category", CategoryController.addCategory);
route.patch("/:id", CategoryController.updateCategory);

export const CategoryRouter = route;
