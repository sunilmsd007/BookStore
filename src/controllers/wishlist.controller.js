import HttpStatus from 'http-status-codes';
import * as WishlistService from '../services/wishlist.service';

/**
 * Controller to add book to wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addToWishlist = async (req, res, next) => {
  try {
    const data = await WishlistService.addToWishlist(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Added To Wishlist successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};