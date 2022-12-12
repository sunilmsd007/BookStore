import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuthForCart } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add book to cart
router.post('', userAuthForCart, cartController.addToCart);

//route to remove book from cart
router.post('/removebook', userAuthForCart, cartController.removeFromCart);

//route to remove book one by one from cart
router.post('/reducebook', userAuthForCart, cartController.reduceBookQuantityFromCart);

export default router;