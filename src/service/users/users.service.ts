import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iDataCreateUser, iReturnCreateUser } from "../../interfaces";
import { returnCreateUserSchema } from "../../schemas";

export const createUserService = async (dataUser:iDataCreateUser):Promise<iReturnCreateUser> => {

  const createUserRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = createUserRepository.create(dataUser);

  await createUserRepository.save(user);

  const newUser: iReturnCreateUser = returnCreateUserSchema.parse(user);

  return newUser;
};
