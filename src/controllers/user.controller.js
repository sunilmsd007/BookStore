import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};

//user login
export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: "user login successfully "
    });
}catch (error) {
  next(error);
}
}

//forgot password
export const forgotPassword = async (req, res, next) => {
  try {
    const data = await UserService.forgotPassword(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: "link to reset password sent to your email "
    });
}catch (error) {
  next(error);
}
}

//reset password
export const resetPassword = async (req, res, next) => {
  try {
    const data = await UserService.resetPassword(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: "password updated successfully"
    });
}catch (error) {
  next(error);
}
}