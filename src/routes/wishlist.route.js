import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userAuthForCart } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add book to wishlist
router.post('', userAuthForCart, wishlistController.addToWishlist);

export default router;