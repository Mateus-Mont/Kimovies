import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategoriesReturn, iDataCreateCategory, iReturnCreateCategory } from "../../interfaces/categories.interface";
import { categoriesReturnSchema } from "../../schemas";

export const createCategoryService = async (  dataCategory: iDataCreateCategory): Promise<iReturnCreateCategory> => {

  const createCategoryRepository: Repository<Category> =AppDataSource.getRepository(Category);

  const category: Category = createCategoryRepository.create(dataCategory);

  await createCategoryRepository.save(category);

  return category;
};

export const listCategoriesService=async(): Promise<iCategoriesReturn>=>{

  const categoriesRepository:Repository<Category> = AppDataSource.getRepository(Category)

  const categoryFind:Array<Category> = await  categoriesRepository.find()

  const categories:iCategoriesReturn = categoriesReturnSchema.parse(categoryFind)

  return categories

};