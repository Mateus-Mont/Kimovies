import { z } from "zod"

export const createSchedulesSchema = z.object({
    date:z.string(),
    hour:z.string(),
    realEstateId:z.number().int()
})
