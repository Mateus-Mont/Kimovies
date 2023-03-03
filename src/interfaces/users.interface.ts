import { createUserSchema, returnCreateUserSchema, returnMultipleUserSchema, } from "../schemas";
import { z } from "zod";
import { DeepPartial } from "typeorm";

export type iDataCreateUser = z.infer<typeof createUserSchema>;
export type iReturnCreateUser = z.infer<typeof returnCreateUserSchema>;

export type iUsersReturn = z.infer<typeof returnMultipleUserSchema>;

export type iUpdateUser = DeepPartial<iDataCreateUser>;
