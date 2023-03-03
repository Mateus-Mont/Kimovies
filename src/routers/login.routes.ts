import { Router } from "express";
import { loginUserController } from "../controllers";
import { ensureMiddleEmailExists, validBodyMiddlewares } from "../middlewares";
import { loginUser } from "../schemas";

export const loginRoutes: Router = Router();

loginRoutes.post( "", validBodyMiddlewares(loginUser), loginUserController );
