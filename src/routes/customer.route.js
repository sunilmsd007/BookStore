import express from 'express';
import * as customerController from '../controllers/customer.controller';
import { userIdAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add customer details
router.post('', userIdAuth, customerController.addCustomerDetails);

export default router;