import { Router } from "express";
import { loginUserController } from "../controllers";
import { ensureMiddleEmailExists, ensureValidBodyMiddlewares } from "../middlewares";
import { loginUser } from "../schemas";

export const loginRoutes: Router = Router();

loginRoutes.post( "", ensureValidBodyMiddlewares(loginUser), loginUserController );
