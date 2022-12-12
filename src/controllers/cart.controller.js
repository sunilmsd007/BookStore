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
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//Controller to remove book from cart
export const removeFromCart = async (req, res, next) => {
  try {
    const data = await CartService.removeFromCart(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Removed from Cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};

//Controller to remove book one by one from cart
export const reduceBookQuantityFromCart = async (req, res, next) => {
  try {
    const data = await CartService.reduceBookQuantityFromCart(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Removed from Cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
  });
  }
};