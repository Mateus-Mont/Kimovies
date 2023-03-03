import { Router } from "express";
import { loginUserController } from "../controllers";
import { ensureValidBodyMiddlewares } from "../middlewares";
import { loginUserSchema } from "../schemas";

export const loginRoutes: Router = Router();

loginRoutes.post( "", ensureValidBodyMiddlewares(loginUserSchema), loginUserController );
