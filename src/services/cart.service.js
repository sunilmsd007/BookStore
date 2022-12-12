import Cart from '../models/cart.model';
import Book from '../models/books.model';

//add book to cart
export const addToCart = async (body) => {
    const bookData = await Book.findOne({ _id: body._id });
    if (bookData != null) {
        const cartExist = await Cart.findOne({ userId: body.userId });
        let bookExist = false;
        let totalCartPrice = 0;
        let addBook = {
            productId: bookData._id,
            description: bookData.description,
            bookName: bookData.bookName,
            bookImage: bookData.bookImage,
            author: bookData.author,
            price: bookData.price
        };
        if (cartExist == null) {
            const createCart = await Cart.create({ userId: body.userId, books: [addBook], cart_total: addBook.price });
            return createCart;
        } else {
            const bookfind = cartExist.books.forEach(element => {
                if (element.productId == body._id) {
                    element.quantity = element.quantity + 1;
                    totalCartPrice = element.price + cartExist.cart_total;
                    bookExist = true;
                }
            });
            if (bookExist == true) {
                const updateCart = await Cart.findOneAndUpdate(
                    { _id: cartExist._id },
                    { books: cartExist.books, cart_total: totalCartPrice },
                    { new: true }
                );
                return updateCart;
            } else {
                cartExist.cart_total += addBook.price;
                const updateCart = await Cart.findByIdAndUpdate(
                    { _id: cartExist._id },
                    { $push: { books: [addBook] }, cart_total: cartExist.cart_total },
                    { new: true }
                );
                return updateCart;
            }

        }
    } else {
        throw new Error("Book is not available")
    }
};

//remove book from cart
export const removeFromCart = async (body) => {
    const cartExist = await Cart.findOne({ userId: body.userId });
    let bookExist = false;
    let totalCartPrice = 0;
    let removeBook;
    if (cartExist != null) {
        const bookfind = cartExist.books.forEach(element => {
            if (element.productId == body._id) {
                removeBook = {
                    productId: element.productId,
                    description: element.description,
                    bookName: element.bookName,
                    bookImage: element.bookImage,
                    author: element.author,
                    price: element.price
                };
                let existbooktotalprice = element.quantity * element.price;
                totalCartPrice = cartExist.cart_total - existbooktotalprice;
                bookExist = true;
            }
        });
        if (bookExist == true) {
            const updateCart = await Cart.findOneAndUpdate(
                { _id: cartExist._id },
                { $pull: { books: removeBook }, cart_total: totalCartPrice },
                { new: true }
            );
            return updateCart;
        } else {
            throw new Error("Book is not available in cart")
        }
    } else {
        throw new Error("Cart doesn't exist")
    }
};

//remove book one by one from cart 
export const reduceBookQuantityFromCart = async (body) => {
    const cartExist = await Cart.findOne({ userId: body.userId });
    let bookExist = false;
    let totalCartPrice = 0;
    let removeBook;
    let bookQuantity;
    if (cartExist != null) {
        const bookfind = cartExist.books.forEach(element => {
            if (element.productId == body._id) {
                removeBook = {
                    productId: element.productId,
                    description: element.description,
                    bookName: element.bookName,
                    bookImage: element.bookImage,
                    author: element.author,
                    price: element.price
                };
                element.quantity = element.quantity - 1;
                bookQuantity = element.quantity;
                totalCartPrice = cartExist.cart_total - element.price;
                bookExist = true;
            }
        });
        if (bookExist == true) {
            if (bookQuantity == 0) {
                const updateCart = await Cart.findOneAndUpdate(
                    { _id: cartExist._id },
                    { $pull: { books: removeBook }, cart_total: totalCartPrice },
                    { new: true }
                );
                return updateCart;
            } else {
                const updateCart = await Cart.findOneAndUpdate(
                    { _id: cartExist._id },
                    { books: cartExist.books, cart_total: totalCartPrice },
                    { new: true }
                );
                return updateCart;
            }

        } else {
            throw new Error("Book is not available in cart")
        }
    } else {
        throw new Error("Cart doesn't exist")
    }
};