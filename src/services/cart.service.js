import Cart from '../models/cart.model';
import Book from '../models/books.model';

//add to cart
export const addToCart = async (body) => {
    console.log("body============>",body)
    const bookData = await Book.findOne({ _id: body._id });
    console.log("bookdata============>",bookData)
    if(bookData!=null){
        const cartExist = await Cart.findOne({ userId: body.userId });
        console.log("cart============>",cartExist)
        let bookExist = false;
        let totalCartPrice=0;
        let addBook = {
            productId: bookData._id,
            description: bookData.description,
            bookName: bookData.bookName,
            bookImage: bookData.bookImage,
            author: bookData.author,
            price: bookData.price
        };

        if(cartExist==null){
            const createCart = await Cart.create({userId:body.userId, books:[addBook], cart_total:addBook.price});
            return createCart;
        }else{
            const bookfind = cartExist.books.forEach(element => {
                if(element.productId==body._id){
                   element.quantity = element.quantity + 1;
                   totalCartPrice = element.price + cartExist.cart_total;
                   bookExist = true;
                } 
            });
            if(bookExist == true){
                const updateCart = await Cart.findOneAndUpdate(
                    {_id:cartExist._id},
                    {books:cartExist.books, cart_total: totalCartPrice},
                    {new: true}
                    );
                    return updateCart;
            }else{
                cartExist.cart_total += addBook.price;
                const updateCart = await Cart.findByIdAndUpdate(
                    {_id:cartExist._id},
                    {$push: {books:[addBook]}, cart_total: cartExist.cart_total},
                    {new: true}
                );
                return updateCart;
            }
            
        }
    }else{
        throw new Error("Book is not available")
    }
  };