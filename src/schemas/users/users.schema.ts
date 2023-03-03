import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().max(45).email(),
  admin: z.boolean().optional(),
  password: z.string().max(120),
});

export const returnCreateUserSchema = createUserSchema
  .extend({
    id: z.number(),
    createdAt: z.date(),
    deletedAt: z.union([z.date(), z.null()]),
  })
  .omit({ password: true });
