import { Request,Response,NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const ensureUserExistsMiddlewares=async(req:Request,res:Response,next:NextFunction):Promise<void | Response >=>{

    const idUser:number=parseInt(req.params.id)

    const userRepository:Repository<User>=AppDataSource.getRepository(User)

    const userFindOne:User | null =await userRepository.findOne({
        where:{
            id:idUser
        }
    })

    if(!userFindOne){
     throw  new AppError("User not found",400)
    }
    

    return next()

}