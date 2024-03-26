
import { useEffect, useState } from "react";
import { getBooks } from "../utility";
import ReadBooksCard from "./ReadBooksCard";

const ReadBooks = () => {
    // const books= useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setReadBooks(storedBooks);

    }, [])
    console.log(readBooks)

    return (
        <div>
            {
            readBooks.map(book=>(
                <ReadBooksCard key={book.book_Id} book={book}></ReadBooksCard>
            ))
           }
         





        </div>
    );
};

export default ReadBooks;