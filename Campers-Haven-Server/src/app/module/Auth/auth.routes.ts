import { Router } from "express";
import { AuthConroller } from "./auth.controller";

const route = Router();

route.post("/register-user", AuthConroller.registerUser);
route.post("/login", AuthConroller.loginUser);

export const AuthRouter = route;
