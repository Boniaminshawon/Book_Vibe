
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
    let books = [];
    const storedBooks = localStorage.getItem('wish-books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

// save item
export const saveBooks = (book) => {
    let books = getBooks();
    const isExist = books.find(b => b.book_Id === book.book_Id);
    if(!isExist){
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books))
    }

}
export const saveWishBooks = (book) => {
    let books = getWishBooks();
    const isExist = books.find(b => b.book_Id === book.book_Id);
    if(!isExist){
        books.push(book);
        localStorage.setItem('wish-books',JSON.stringify(books))
    }

}

// // delete Item
// export const deleteBooks = (book_Id)=>{
//     let books = getBooks();
//     const remaining = books.filter(b=>b.book_Id!==book_Id);
//     localStorage.setItem('books',JSON.stringify(remaining));
// }