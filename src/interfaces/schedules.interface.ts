import { z } from "zod"
import { createSchedulesSchema } from "../schemas"

export type iCreateSchedule=z.infer<typeof createSchedulesSchema>

