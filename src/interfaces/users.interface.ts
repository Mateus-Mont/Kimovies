import { createUserSchema, returnCreateUserSchema } from "../schemas";
import { TypeOf, z } from "zod";

export type iDataCreateUser = z.infer<typeof createUserSchema>;
export type iReturnCreateUser=z.infer<typeof returnCreateUserSchema>
