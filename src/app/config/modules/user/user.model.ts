import { Schema, model } from 'mongoose';
import { Name, User } from './user.interface';
const nameSchema = new Schema<Name>({
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
});
const userSchema = new Schema<User>({
  id: { type: String },
  name: nameSchema,
  password: { type: String },
  role: ['admin', 'moderator', 'customer', 'guest'],
});

export const UserModel = model<User>('User', userSchema);
