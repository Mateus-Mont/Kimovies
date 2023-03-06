import { Request,Response } from "express";
import { iDataCreateRealEstate, iReturnCreateRealEstate, iReturnListRealEstate } from "../interfaces";
import { createRealEstateService, listRealEstateService } from "../service";

export const createRealEstateController = async (req:Request,res:Response):Promise<Response>=>{

    const dataCreateRealEstate:iDataCreateRealEstate=req.body
   

    const newRealEstate:iReturnCreateRealEstate = await createRealEstateService(dataCreateRealEstate)

    return res.status(201).json(newRealEstate)

}

export const listRealEstatesController = async (req:Request, res:Response ):Promise<Response>=>{

    const realEstates:iReturnListRealEstate = await listRealEstateService()

    return res.status(200).json(realEstates)

}