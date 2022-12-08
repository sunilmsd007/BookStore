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
