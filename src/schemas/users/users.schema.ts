import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().max(45).email(),
  admin: z.boolean().optional().default(false),
  password: z.string().max(120),

});

export const returnCreateUserSchema = createUserSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    deletedAt: z.date().nullable(),
    updatedAt:z.string().nullable()
  }).omit({ password: true });

export const returnMultipleUserSchema = returnCreateUserSchema.array();

export const updateUserSchema = createUserSchema.partial().omit({ admin: true });
