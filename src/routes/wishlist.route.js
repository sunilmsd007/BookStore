import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userIdAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add book to wishlist
router.post('', userIdAuth, wishlistController.addToWishlist);

//route to remove book from wishlist
router.post('/removebook', userIdAuth, wishlistController.removeFromWishlist);

export default router;