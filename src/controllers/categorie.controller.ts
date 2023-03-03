import { Request, Response } from "express";
import { iCategoriesReturn, iDataCreateCategory, iReturnCreateCategory } from "../interfaces/categories.interface";
import { createCategoryService, listCategoriesService } from "../service";

export const createCategoryController = async ( req: Request, res: Response ): Promise<Response> => {

  const dataCategory: iDataCreateCategory = req.body;

  const newCategory: iReturnCreateCategory = await createCategoryService( dataCategory );

  console.log("função resposta");

  return res.status(201).json(newCategory);
};

export const listCategoriesController= async ( req: Request, res :Response): Promise<Response>=>{

  const categories:iCategoriesReturn = await listCategoriesService()

  return res.status(200).json(categories)
}
