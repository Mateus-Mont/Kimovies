import { Router } from "express";
import { createCategoryController } from "../controllers";
import { ensureValidTokenAdminMiddlewares } from "../middlewares/ensureValidTokenAdmin.meddlewares";
import { ensureCategoryNameExists, validBodyMiddlewares } from "../middlewares";
import { dataCategorySchema } from "../schemas";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("",validBodyMiddlewares(dataCategorySchema),ensureCategoryNameExists,ensureValidTokenAdminMiddlewares, createCategoryController);
