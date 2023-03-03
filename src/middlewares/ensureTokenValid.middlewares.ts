import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import Jwt from "jsonwebtoken";

export const ensureTokenValidMiddlewares = async (req: Request, res: Response, next: NextFunction ): Promise<void | Response> => {
  
  const idUser = req.params.id;

  let token: string | undefined = req.headers.authorization;

  if (!token) {
    throw new AppError("Token is missing", 401);
  }

  token = token.split(" ")[1];

  Jwt.verify(token, process.env.SECRET_KEY!, (error, decode: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    if (idUser === decode?.sub || decode.admin) {
      return next();
    }

    throw new AppError("Do not have permission", 403);
  });
};
