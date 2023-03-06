import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iCategoriesReturn, iDataCreateCategory, iReturnCreateCategory } from "../../interfaces/categories.interface";
import { categoriesReturnSchema, returnDataCategorySchema, returnMultipleRealEstateSchema } from "../../schemas";

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

export const listRealEstateFromCategoryService = async(idCategory:number):Promise<object>=>{

  const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)
  const categoriesRepository:Repository<Category> = AppDataSource.getRepository(Category)

  const categoryFindOne:Category | null = await categoriesRepository.findOneBy({
    id:idCategory
  })

  if(!categoryFindOne){
    throw new AppError("Category not found",404)
  }

 const category:iReturnCreateCategory=returnDataCategorySchema.parse(categoryFindOne)

  const realEstate = await realEstateRepository.find({
   where:{
    category:category,
   }
  })
  
 return {
   ...category,
   realEstate 
  }
}