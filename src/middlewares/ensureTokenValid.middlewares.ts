import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import Jwt from "jsonwebtoken";



export const ensureTokenValidMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  const idUser = req.params.id;
  const token = req.headers.authorization?.split(" ")[1];
  
  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  Jwt.verify(token, process.env.SECRET_KEY!, (error: any, decode: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
    
    if(idUser) {
      if (idUser === decode?.sub || decode.admin) {
        req.subToken = decode.sub;
        return next();
      }
    } else {
      req.subToken = decode.sub;
      return next();
    }


    throw new AppError("Insufficient permission", 403);
  });
};
