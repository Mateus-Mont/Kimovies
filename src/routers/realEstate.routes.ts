import { Router } from "express";
import { createRealEstateController, listRealEstatesController } from "../controllers";
import { ensureValidBodyMiddlewares, ensureValidTokenAdminMiddlewares } from "../middlewares";
import { createRealEstateSchema } from "../schemas";

export const realEstateRoutes:Router=Router()

realEstateRoutes.post( "",ensureValidBodyMiddlewares(createRealEstateSchema),ensureValidTokenAdminMiddlewares,createRealEstateController )
realEstateRoutes.get( "",listRealEstatesController )