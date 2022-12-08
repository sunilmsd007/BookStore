import Book from '../models/books.model';

//get all books
export const getAllBooks = async () => {
    const data = await Book.find();
    if (data.length != 0) {
        return data;
    } else {
        throw new Error('No books are available');
    }
}

//get book by id
export const getBookById = async (_id) => {
    const data = await Book.findOne({ _id: _id });
    if (data != null) {
        return data;
    } else {
        throw new Error('No books are available with this id');
    }
}