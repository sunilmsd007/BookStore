import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to add book to cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const addToCart = async (req, res, next) => {
    try {
      const data = await CartService.addToCart(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Added To Cart successfully'
      });
    } catch (error) {
      next(error);
    }
  };