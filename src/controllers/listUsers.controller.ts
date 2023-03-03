import { Request, Response } from "express";
import { allUsersService } from "../service";

export const listUsersController = async ( req: Request, res: Response ): Promise<Response> => {

  const users = await allUsersService();

  return res.status(200).json(users);
};
