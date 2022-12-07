import express from 'express';
import * as userController from '../controllers/user.controller';
import { LoginValidator, newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('', newUserValidator, userController.newUser);

//route to login a single user
router.post('/login', LoginValidator,userController.login);

//route to forgot password
router.post('/forgotpwd', userController.forgotPassword);

//route to reset password
router.post('/resetpwd',userAuth, userController.resetPassword);

export default router;
