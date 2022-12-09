import Cart from '../models/cart.model';
import Book from '../models/books.model';

//register new user
export const addToCart = async (body) => {
    console.log("body============>",body)
    const bookData = await Book.findById({ _id: body._id });
    console.log("data============>",bookData._id)
    if(bookData!=null){
        const cartExist = await Cart.findOne({ userId: body.userId });
        console.log("cart============>",cartExist)
        if(cartExist==null){
            const createCart = await Cart.create({userId:body.userId});
            console.log("data============>",bookData._id)
            const updateCart = await Cart.findOneAndUpdate(
                {userId:body.userId},
                {$push:{books:{productId:bookData._id}}},
                {new: true}
                );
                return updateCart;
        }else{
            const updateCart = await Cart.findOneAndUpdate(
                {_id:cartExist._id},
                {$push:{books:{productId:bookData._id}}},
                {new: true}
                );
                return updateCart;
        }
    }else{
        throw new Error("Book is not available")
    }
  };