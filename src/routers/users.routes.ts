import { Router } from "express";
import { createUserController, listUsersController, updateUserController, } from "../controllers";
import { ensureMiddleEmailExists, ensureTokenValidMiddlewares, ensureUserExistsMiddlewares } from "../middlewares";
import { ensureValidBodyMiddlewares } from "../middlewares";
import { ensureValidTokenAdminMiddlewares } from "../middlewares/ensureValidTokenAdmin.middlewares";
import { createUserSchema, updateUserSchema } from "../schemas";

export const usersRoutes: Router = Router();

usersRoutes.post( "", ensureValidBodyMiddlewares(createUserSchema), ensureMiddleEmailExists, createUserController );
usersRoutes.get("", ensureValidTokenAdminMiddlewares, listUsersController);
usersRoutes.patch( "/:id", ensureValidBodyMiddlewares(updateUserSchema), ensureUserExistsMiddlewares, ensureTokenValidMiddlewares, ensureMiddleEmailExists, updateUserController );
