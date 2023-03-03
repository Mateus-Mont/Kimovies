import { Category } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request,Response,NextFunction, } from "express";
import { AppError } from "../errors";

export const ensureCategoryNameExists = async (req:Request,res:Response,next: NextFunction):Promise<void> => {

  const { name } = req.body;

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const category:Category | null = await categoryRepository.findOne({
    where: {
      name: name,
    },
  });

  console.log("middle token")

  if (category) {
    throw new AppError("Category already exists.", 409);
  }

  return next();
};
