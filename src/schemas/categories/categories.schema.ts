import { z } from "zod";

export const dataCategorySchema = z.object({
  name: z.string().min(3).max(45),
});

export const returnDataCategory = dataCategorySchema.extend({
  id: z.number(),
});
