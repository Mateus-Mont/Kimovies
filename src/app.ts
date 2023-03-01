import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./errors"
import { loginRoutes } from "./routers/login.routes"
import { categoriesRoutes } from "./routers/categories.routes"
import { usersRoutes } from "./routers/users.routes"
import {schedulesRoutes}from "./routers/schedules.routes"
import { realEstateRoutes } from "./routers/realEstate.routes"

const app: Application = express()
app.use(express.json())
app.use("/login",loginRoutes)
app.use("/categories",categoriesRoutes)
app.use("/users",usersRoutes)
app.use("/schedules",schedulesRoutes)
app.use("realEstate",realEstateRoutes)
app.use(handleErrors)
export default app