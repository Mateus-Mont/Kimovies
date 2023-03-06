import { z } from "zod"
import { createRealEstateSchema, returnCreateRealEstate, returnMultipleRealEstateSchema } from "../schemas"

export type iDataCreateRealEstate=z.infer<typeof createRealEstateSchema >
export type iReturnCreateRealEstate=z.infer<typeof returnCreateRealEstate >

export type iReturnListRealEstate=z.infer< typeof returnMultipleRealEstateSchema>
 
