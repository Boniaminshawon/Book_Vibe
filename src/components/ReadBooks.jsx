
import { useEffect, useState } from "react";
import { getBooks } from "../utility";
import ReadBooksCard from "./ReadBooksCard";

const ReadBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setReadBooks(storedBooks);

    }, [])

    return (
        <div>
            {
                readBooks.map(book => (
                    <ReadBooksCard key={book.book_Id} book={book}></ReadBooksCard>
                ))
            }

        </div>
    );
};

export default ReadBooks;