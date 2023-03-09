import { Router } from "express";
import { createSchedulesController, listPropertyAppointmentController } from "../controllers";
import { ensureTokenValidMiddlewares, ensureValidBodyMiddlewares, ensureValidTokenAdminMiddlewares } from "../middlewares";
import { createSchedulesSchema } from "../schemas";


export const schedulesRoutes:Router=Router()

schedulesRoutes.post("",ensureTokenValidMiddlewares ,ensureValidBodyMiddlewares(createSchedulesSchema), createSchedulesController)
schedulesRoutes.get("/realEstate/:id",ensureValidTokenAdminMiddlewares, listPropertyAppointmentController)