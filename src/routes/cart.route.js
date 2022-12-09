import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuthForCart } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add book to cart
router.post('', userAuthForCart, cartController.addToCart);


export default router;