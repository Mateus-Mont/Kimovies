import { z } from "zod";
import { loginUser } from "../schemas";

export type iDataLogin = z.infer<typeof loginUser>;
