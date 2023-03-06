import { z } from "zod";
import { categoriesReturnSchema, dataCategorySchema, returnDataCategorySchema } from "../schemas";


export type iDataCreateCategory = z.infer<typeof dataCategorySchema>;
export type iReturnCreateCategory = z.infer<typeof returnDataCategorySchema>;

export type iCategoriesReturn=z.infer<typeof categoriesReturnSchema>

