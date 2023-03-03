import { Router } from "express";
import {
  createUserController,
  listUsersController,
  updateUserController,
} from "../controllers";
import { ensureMiddleEmailExists, ensureTokenValidMiddlewares, ensureUserExistsMiddlewares } from "../middlewares";
import { validBodyMiddlewares } from "../middlewares";
import {ensureValidTokenAdminMiddlewares  } from "../middlewares/ensureValidTokenAdmin.middlewares";
import { createUserSchema } from "../schemas";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  validBodyMiddlewares(createUserSchema),
  ensureMiddleEmailExists,
  createUserController
);
usersRoutes.get("", ensureValidTokenAdminMiddlewares, listUsersController);
usersRoutes.patch("/:id", ensureUserExistsMiddlewares,ensureTokenValidMiddlewares, ensureMiddleEmailExists,updateUserController);
