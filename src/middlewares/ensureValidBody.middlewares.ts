import { ZodTypeAny } from "zod";
import { NextFunction, Request,Response } from "express";

export const validBodyMiddlewares=(schema:ZodTypeAny)=>(req:Request,res:Response,next:NextFunction):void=>{

    const validBody=schema.parse(req.body)

    req.body=validBody

    return next()
}