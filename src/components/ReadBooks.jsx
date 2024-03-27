
import { useContext } from "react";
import ReadBooksCard from "./ReadBooksCard";
import { sortContext } from "../Pages/ListedBooks";

const ReadBooks = () => {
    const sort = useContext(sortContext);
    
    return (
        <div>
            {
                sort.map(book => (
                    <ReadBooksCard key={book.book_Id} book={book}></ReadBooksCard>
                ))
            }

        </div>
    );
};

export default ReadBooks;