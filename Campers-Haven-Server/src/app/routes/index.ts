import { Router } from "express";
import { ProductRouter } from "../module/Product/product.routes";
import { CategoryRouter } from "../module/category/category.routes";
import { AuthRouter } from "../module/Auth/auth.routes";
import { OrderRouter } from "../module/Order/order.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: ProductRouter,
  },
  {
    path: "/category",
    route: CategoryRouter,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/orders",
    route: OrderRouter,
  },
];

moduleRoutes.forEach((el) => router.use(el.path, el.route));

export default router;
