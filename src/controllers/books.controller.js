import HttpStatus from 'http-status-codes';
import * as BookService from '../services/books.service';

/**
* Controller to get all books available
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const getAllBooks = async (req, res, next) => {
    try {
        const data = await BookService.getAllBooks();
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'All books fetched successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};
