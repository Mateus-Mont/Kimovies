import {z} from "zod"

export const loginUser=z.object({
    email:z.string().email(),
    password:z.string()
})