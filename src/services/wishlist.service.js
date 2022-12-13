import Book from '../models/books.model';
import Wishlist from '../models/wishlist.model';

//add book to wishlist
export const addToWishlist = async (body) => {
    const bookData = await Book.findOne({ _id: body._id });
    if (bookData != null) {
        let newBook = true;
        const wishlistExist = await Wishlist.findOne({ userId: body.userId });
        let addBook = {
            productId: bookData._id,
            description: bookData.description,
            bookName: bookData.bookName,
            bookImage: bookData.bookImage,
            author: bookData.author,
            price: bookData.price
        };
        if (wishlistExist == null) {
            const createWishlist = await Wishlist.create({ userId: body.userId, books: addBook });
            return createWishlist;
        } else {
            wishlistExist.books.forEach(element => {
                if (element.productId == body._id) {
                    newBook = false;
                }
            });
            if (newBook) {
                const updateWishlist = await Wishlist.findOneAndUpdate(
                    { _id: wishlistExist._id },
                    { $addToSet: { books: addBook } },
                    { new: true }
                );
                return updateWishlist;
            } else {
                throw new Error("Book already wishlisted")
            }
        }
    } else {
        throw new Error("Book is not available")
    }
};
