import { Router } from "express";
import { createCategoryController } from "../controllers";
import { ensureCategoryNameExists, validBodyMiddlewares,ensureValidTokenAdminMiddlewares } from "../middlewares";
import { dataCategorySchema } from "../schemas";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("",validBodyMiddlewares(dataCategorySchema),ensureCategoryNameExists,ensureValidTokenAdminMiddlewares,createCategoryController);
