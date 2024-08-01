import { Router } from "express";
import { AuthConroller } from "./auth.controller";

const route = Router();

route.post("/register-user", AuthConroller.registerUser);

export const AuthRouter = route;
