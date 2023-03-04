import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iDataCreateUser, iReturnCreateUser, iUsersReturn } from "../../interfaces";
import { iUpdateUser } from "../../interfaces/users.interface";
import { returnCreateUserSchema, returnMultipleUserSchema } from "../../schemas";

export const createUserService = async ( dataUser: iDataCreateUser ): Promise<iReturnCreateUser> => {

  const createUserRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = createUserRepository.create(dataUser);

  await createUserRepository.save(user);

  const newUser: iReturnCreateUser = returnCreateUserSchema.parse(user);

  return newUser;
};

export const allUsersService = async (): Promise<iUsersReturn> => {

  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers: Array<User> = await usersRepository.find();

  const users:iUsersReturn =  returnMultipleUserSchema.parse(findUsers);

  return users;
};

export const updateUserService = async ( newUserData: iUpdateUser, idUser: number ): Promise<iUpdateUser> => {

  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await usersRepository.findOneBy({
    id: idUser,
  });

  const newDataUser = usersRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await usersRepository.save(newDataUser);

  const user: iUpdateUser = returnCreateUserSchema.parse(newDataUser);

  return user;
};

export const deleteUserService  = async(idUser:number):Promise<void>=>{

  const usersRepository:Repository<User>=AppDataSource.getRepository(User)

  const user = await usersRepository.findOne({
    where:{
      id:idUser
    }
  })

   await usersRepository.softRemove(user!)


}