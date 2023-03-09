import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { AppError } from "../errors";

export const ensureValidTokenAdminMiddlewares = async ( req: Request, res: Response, next: NextFunction ): Promise<void> => {
  
  let token: string | undefined = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  token = token.split(" ")[1];

  Jwt.verify(token, process.env.SECRET_KEY!, (error, decode: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
   

    if (decode.admin) {
  
      return next();
    }

    throw new AppError("Insufficient permission", 403);
  });
};
