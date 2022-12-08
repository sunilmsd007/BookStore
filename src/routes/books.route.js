import express from 'express';
import * as bookController from '../controllers/books.controller';

const router = express.Router();

//to get all books
router.get('',bookController.getAllBooks);

//to get book by ID
router.get('/:_id',bookController.getBookById);

export default router;