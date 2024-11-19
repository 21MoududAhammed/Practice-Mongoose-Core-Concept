import { UserServices } from './user.service.';

const createSingleUser = async (req: Request, res: Response) => {
  const user = req.body;

  const result = await UserServices.createUserIntoDB(user);
  res.status(200).json({
    success: true,
    message: 'Create a user successfully!',
    data: result,
  });
};

export const UserControllers = {
  createSingleUser,
};
