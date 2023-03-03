import { Router } from "express";
import { createCategoryController } from "../controllers";
import { ensureCategoryNameExists, ensureValidBodyMiddlewares, ensureValidTokenAdminMiddlewares, } from "../middlewares";
import { dataCategorySchema } from "../schemas";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post( "",ensureValidBodyMiddlewares(dataCategorySchema), ensureCategoryNameExists, ensureValidTokenAdminMiddlewares, createCategoryController );
