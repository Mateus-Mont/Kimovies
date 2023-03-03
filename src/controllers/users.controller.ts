import { Request, Response } from "express";
import { iDataCreateUser, iReturnCreateUser } from "../interfaces";
import { createUserService } from "../service";

export const createUserController = async (req: Request, res: Response):Promise<Response> => {
    
  const dataUser: iDataCreateUser = req.body;

  const user: iReturnCreateUser = await createUserService(dataUser);

  return res.status(201).json(user);
};
