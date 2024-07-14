import { Router } from "express";
import { ProductRouter } from "../module/Product/product.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: ProductRouter,
  },
];

moduleRoutes.forEach((el) => router.use(el.path, el.route));

export default router;
