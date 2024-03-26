
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { getBooks } from "../utility";
// import { useLoaderData } from "react-router-dom";


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
            {/* {
            readBooks.map(book=>(
                <p>{book.book_name}</p>
            ))
           } */}
            <h3 className="text-3xl font-black"> read books: {readBooks}</h3>
        </div>
    );
};

export default ReadBooks;