import User from '../models/user.model';
import bcrypt from 'bcrypt';

//create new user
export const newUser = async (body) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(body.password, salt);
  body.password = hash;
  const data = await User.create(body);
  return data;
};
