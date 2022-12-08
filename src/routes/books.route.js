import express from 'express';
import * as bookController from '../controllers/books.controller';

const router = express.Router();

//to get all books
router.get('',bookController.getAllBooks);

export default router;