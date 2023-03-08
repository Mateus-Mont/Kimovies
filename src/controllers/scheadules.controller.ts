import { Request,Response } from "express";
import { iCreateSchedule } from "../interfaces";
import { createScheduleService } from "../service";

export const createSchedulesController = async(req:Request, res:Response):Promise<Response>=>{

    const idUser:number=Number(req.subToken)
    
    const dataSchedule:iCreateSchedule = req.body

    await createScheduleService(dataSchedule,idUser)

    return res.status(201).json({message:"Schedule created"})
}