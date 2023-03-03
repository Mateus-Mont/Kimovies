import { Router } from "express";
import { createUserController } from "../controllers";
import { ensureMiddleEmailExists } from "../middlewares";
import {validBodyMiddlewares} from "../middlewares"
import { createUserSchema } from "../schemas";

export const usersRoutes:Router=Router();

usersRoutes.post( "", validBodyMiddlewares(createUserSchema), ensureMiddleEmailExists, createUserController )