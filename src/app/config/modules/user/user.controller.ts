import { UserServices } from './user.service.';
import { Request, Response } from 'express';
// controller to create/ insert a user to db
const createSingleUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const result = await UserServices.createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: 'Create a user successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// controller to get all users from db
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'All users info retrieved successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// controller to get a user based on id
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'Retrieved a user info based on userId',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserControllers = {
  createSingleUser,
  getAllUsers,
  getSingleUser,
};
