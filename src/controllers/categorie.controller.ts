import { Request,Response } from "express";
import { iDataCreateCategory, iReturnCreateCategory } from "../interfaces/categories.interface";
import { createCategoryService } from "../service";

export const createCategoryController=async(req:Request,res:Response):Promise<Response>=>{

    const dataCategory:iDataCreateCategory=req.body

    const newCategory:iReturnCreateCategory= await createCategoryService(dataCategory)

    console.log("função resposta")

    return res.status(201).json(newCategory)

}