import toast from "react-hot-toast";

// get item

export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}
export const getWishBooks = () => {
    let wishBook = [];
    const storedWishBooks = localStorage.getItem('wish-books');
    if (storedWishBooks) {
        wishBook = JSON.parse(storedWishBooks);
    }
    return wishBook;
}

// save item
export const saveBooks = (book) => {
    let books = getBooks();
    const isExist = books.find(b => b.book_Id === book.book_Id);
    if (!isExist) {
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        toast.success('Successfully added to the read list!');
    }
    else if (isExist) {
        toast.error('You already added this book')
    }


}
export const saveWishBooks = (book) => {

    let books = getBooks();
    let wishBook = getWishBooks();
    // let wishBook = [];
    const isExist = books.find(b => b.book_Id === book.book_Id);
    const isWishListExist = wishBook.find(b => b.book_Id === book.book_Id);

    if (isExist) {
        toast.error('Oops!You already read this book!')
    }
    else if (!isExist && !isWishListExist) {

        wishBook.push(book);
        localStorage.setItem('wish-books', JSON.stringify(wishBook));
        toast.success('This book is added in your wishlist.');
    }
    else if (isWishListExist) {
        toast.error('Sorry you can add a book only one time');
    }
}


// // delete Item
// export const deleteBooks = (book_Id)=>{
//     let books = getBooks();
//     const remaining = books.filter(b=>b.book_Id!==book_Id);
//     localStorage.setItem('books',JSON.stringify(remaining));
// }