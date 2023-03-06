import { z } from "zod";
import { returnDataCategorySchema} from "../";

const createAddressSchema = z.object({
  street: z.string().min(3).max(45),
  zipCode: z.string().max(8),
  number: z.string().optional().nullable(),
  city: z.string().max(20),
  state: z.string().min(2).max(2),
  
});

const returnAddressSchema = createAddressSchema.extend({
  id: z.number(),
});

export const createRealEstateSchema = z.object({
  value: z.union([z.string(), z.number()]),
  size: z.number().int().min(1, "Number must be greater than 0"),
  categoryId:z.number().default(1),
  address: createAddressSchema
});

export const returnCreateRealEstate = createRealEstateSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt:z.string(),
  sold: z.boolean().default(false),
  address: returnAddressSchema,
  category:returnDataCategorySchema
});

export const returnMultipleRealEstateSchema = returnCreateRealEstate.omit({category:true,categoryId:true}).array();

