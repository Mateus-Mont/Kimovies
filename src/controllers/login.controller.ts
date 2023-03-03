import { Request, Response } from "express";
import { iDataLogin } from "../interfaces/login.interface";
import { loginUserService } from "../service";

export const loginUserController = async (req: Request,res: Response): Promise<Response> => {
    
  const loginUser: iDataLogin = req.body;

  const token: string = await loginUserService(loginUser);

  return res.json({ token: token });
};
