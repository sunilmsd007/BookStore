import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userIdAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add book to cart
router.post('', userIdAuth, cartController.addToCart);

//route to remove book from cart
router.post('/removebook', userIdAuth, cartController.removeFromCart);

//route to remove book one by one from cart
router.post('/reducebook', userIdAuth, cartController.reduceBookQuantityFromCart);

export default router;