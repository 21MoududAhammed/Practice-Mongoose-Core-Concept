import { User } from './user.interface';
import { UserModel } from './user.model';

// service to create / insert a user into the DB
const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

// service to get all users from db
const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

// service to get a user from db
const getSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.find({ id: userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
