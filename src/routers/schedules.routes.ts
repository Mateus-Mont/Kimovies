import { Router } from "express";
import { createSchedulesController } from "../controllers";
import { ensureTokenValidMiddlewares, ensureValidBodyMiddlewares } from "../middlewares";
import { createSchedulesSchema } from "../schemas";


export const schedulesRoutes:Router=Router()

schedulesRoutes.post("",ensureTokenValidMiddlewares ,ensureValidBodyMiddlewares(createSchedulesSchema), createSchedulesController)