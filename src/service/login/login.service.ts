import "dotenv/config";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { compare } from "bcryptjs";
import Jwt from "jsonwebtoken";
import { iDataLogin } from "../../interfaces/login.interface";
import { AppError } from "../../errors";

export const loginUserService = async (dataLogin: iDataLogin): Promise<any> => {
  const { email, password } = dataLogin;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Wrong email or password", 401);
  }

  const matchPassword: boolean = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError("Wrong email or password", 401);
  }

  const token: string = Jwt.sign(
    {
      authorization: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};
