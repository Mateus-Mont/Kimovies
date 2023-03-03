import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iDataCreateCategory, iReturnCreateCategory } from "../../interfaces/categories.interface";

export const createCategoryService = async (  dataCategory: iDataCreateCategory): Promise<iReturnCreateCategory> => {

  const createCategoryRepository: Repository<Category> =AppDataSource.getRepository(Category);

  const category: Category = createCategoryRepository.create(dataCategory);

  await createCategoryRepository.save(category);

  return category;
};
