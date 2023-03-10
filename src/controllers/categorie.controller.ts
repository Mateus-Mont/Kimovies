import { Request, Response } from "express";
import { iCategoriesReturn, iDataCreateCategory, iReturnCreateCategory } from "../interfaces/categories.interface";
import { createCategoryService, listCategoriesService, listRealEstateFromCategoryService } from "../service";


export const createCategoryController = async ( req: Request, res: Response ): Promise<Response> => {

  const dataCategory: iDataCreateCategory = req.body;

  const newCategory: iReturnCreateCategory = await createCategoryService( dataCategory );

  return res.status(201).json(newCategory);
};

export const listCategoriesController= async ( req: Request, res :Response): Promise<Response>=>{

  const categories:iCategoriesReturn = await listCategoriesService()

  return res.status(200).json(categories)
}

export const listRealEstateCategoryController = async (req:Request, res:Response):Promise<Response>=>{

  const idCategory= parseInt(req.params.id)

  const realEstate = await listRealEstateFromCategoryService(idCategory)

  return res.status(200).json(realEstate)

}