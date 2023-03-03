import { z } from "zod";

export const dataCategorySchema = z.object({
  name: z.string().min(3).max(45),
});

export const returnDataCategorySchema = dataCategorySchema.extend({
  id: z.number(),
});

export const categoriesReturnSchema= returnDataCategorySchema.array()