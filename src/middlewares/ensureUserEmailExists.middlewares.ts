import { Request,Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const ensureMiddleEmailExists = async (req: Request, res:Response,next: NextFunction): Promise<void> => {
  const { email } = req.body;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user:User | null= await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (user) {
    throw new AppError("Email already exists.", 409);
  }

  return next();
};
