import { useEffect, useState } from "react";
// import { getWishBooks } from "../utility";
import ReadBooksCard from "./ReadBooksCard";
import { getWishBooks } from "../utility";

const Wishlist = () => {
    const [wishListBooks, setWishListBooks] = useState([]);
    useEffect(() => {
        const storedWhishListBooks = getWishBooks();
        setWishListBooks(storedWhishListBooks);

    }, [])
 
    return (
        <div>
            {wishListBooks.map(book => (
                <ReadBooksCard key={book.book_Id} book={book}></ReadBooksCard>
            ))}
        </div>
    );
};

export default Wishlist;