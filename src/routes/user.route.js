import express from 'express';
import * as userController from '../controllers/user.controller';
import { LoginValidator, newUserValidator } from '../validators/user.validator';

const router = express.Router();

//route to create a new user
router.post('', newUserValidator, userController.newUser);

//route to login a single user
router.post('/login', LoginValidator,userController.login);

export default router;
