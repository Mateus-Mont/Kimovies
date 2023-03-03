import { Request, Response } from "express";
import { iDataCreateUser, iReturnCreateUser, iUpdateUser } from "../interfaces";
import { createUserService, updateUserService } from "../service";

export const createUserController = async ( req: Request, res: Response ): Promise<Response> => {

  const dataUser: iDataCreateUser = req.body;

  const user: iReturnCreateUser = await createUserService(dataUser);

  return res.status(201).json(user);
};

export const updateUserController = async ( req: Request, res: Response ): Promise<Response> => {

  const idUser = parseInt(req.params.id);

  const dataUser: iUpdateUser = req.body;

  const user: iUpdateUser = await updateUserService(dataUser, idUser);

  return res.status(200).json(user);
};
