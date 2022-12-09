import Cart from '../models/cart.model';
import Book from '../models/books.model';

//add to cart
export const addToCart = async (body) => {
    console.log("body============>",body)
    const bookData = await Book.findOne({ _id: body._id });
    console.log("bookdata============>",bookData)
    console.log("dataId============>",bookData._id)
    console.log("description============>",bookData.description)
    if(bookData!=null){
        const cartExist = await Cart.findOne({ userId: body.userId });
        console.log("cart============>",cartExist)
        let addBook = {
            productId: bookData._id,
            description: bookData.description,
            bookName: bookData.bookName,
            bookImage: bookData.bookImage,
            author: bookData.author,
            price: bookData.price
        };
        if(cartExist==null){
            const createCart = await Cart.create({userId:body.userId, books:[addBook], cart_total:bookData.price});
            return createCart;
        }else{
            const updateCart = await Cart.findOneAndUpdate(
                {_id:cartExist._id},
                {$push:{books:[addBook]}},
                {new: true}
                );
                return updateCart;
        }
    }else{
        throw new Error("Book is not available")
    }
  };