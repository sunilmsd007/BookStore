import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customer.service';

/**
 * Controller to add customer details
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addCustomerDetails = async (req, res, next) => {
    try {
        const data = await CustomerService.addCustomerDetails(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Added Customer details successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};