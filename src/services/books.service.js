import Book from '../models/books.model';

//get all books
// export const getAllBooks = async () => {
//     const data = await Book.find();
//     if (data.length != 0) {
//         return data;
//     } else {
//         throw new Error('No books are available');
//     }
// }

//get all books quantity less than 5
export const getAllBooks = async () => {
   // const data = await Book.find({quantity: {$lt: 5}});  //gt, lte, ne, eq
   // const data = await Book.aggregate([{$match: {author: "Kale"}}]); 
   // const data = await Book.aggregate([{$match: {author: { $regex: "kAle", $options: "i" }}}]); //case in-sensitive
   //const data = await Book.aggregate([{$match: {$and: [{author: "Kale"}, {bookName:"Design Patterns"} ]}}]);
   //const data = await Book.aggregate([{$match: {$or: [{author: "Kale"}, {bookName:"Sherlock: Chronicles"} ]}}]);
   // const data = await Book.aggregate([{$sort: {author: 1}}]);  //1 for ascending, -1 for descending
   // const data = await Book.aggregate([{$count: "total books"}]);
   // const data = await Book.aggregate([{$limit: 5}]);
   //const data = await Book.aggregate([{$skip: 5}]);
   const data = await Book.aggregate([{
    $group:{ _id:"price", total: {$sum: "$price"}}   //$avg $min $max
    //$group:{ _id:"$bookName", total: {$max: "$price"}} 
    }]);

    if (data.length != 0) {
        return data;
    } else {
        throw new Error('No books are available');
    }
}

//get first 5 books
// export const getAllBooks = async () => {
//     const data = await Book.find().limit(5);  //.skip(5) will skip first 5
//     if (data.length != 0) {
//         return data;
//     } else {
//         throw new Error('No books are available');
//     }
// }

//get book by id
export const getBookById = async (_id) => {
    const data = await Book.findOne({ _id: _id });
    if (data != null) {
        return data;
    } else {
        throw new Error('No books are available with this id');
    }
}