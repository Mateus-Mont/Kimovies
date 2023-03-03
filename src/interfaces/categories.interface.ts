import {z} from "zod"
import {dataCategorySchema, returnDataCategory } from "../schemas";

export type iDataCreateCategory=z.infer<typeof dataCategorySchema>
export type iReturnCreateCategory=z.infer<typeof returnDataCategory>