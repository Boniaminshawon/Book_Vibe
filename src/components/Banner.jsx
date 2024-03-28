import { Link } from "react-router-dom";
import BooksContainer from "./BooksContainer";


const Banner = ({ books }) => {
    return (
        <div>
            <div className="bg-[#1313130D] mt-2 lg:mt-10 py-7 md:py-12 lg:px-24 rounded-3xl flex justify-center items-center">
                <div className="ml-5 ">
                    <h1 className="lg:text-[56px] text-[26px] mb-7 md:mb-10 font-bold text-[#131313] ">Books to freshen up your bookshelf</h1>
                   <Link to={'/listBook'}> <button className="text-white bg-[#23BE0A] sm:text-xl text-lg font-semibold font-secondary px-3 py-2 sm:px-4 sm:py-3 rounded-2xl">View The List</button></Link>
                </div>
                <div>
                    <img className="w-[70%] lg:w-full" src="https://i.ibb.co/3T89FSk/pile-of-books-classic-literature-BBXA0-F-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className="text-center my-8 sm:my-16">
                <h1 className="font-semibold mb-8 sm:mb-10 text-3xl sm:text-4xl text-[#131313]">Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        books.map(book => <BooksContainer book={book} key={book.book_Id}></BooksContainer>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;

