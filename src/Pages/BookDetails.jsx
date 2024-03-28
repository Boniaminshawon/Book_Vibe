import { useLoaderData,  useNavigate,  useParams } from "react-router-dom";
import { saveBooks, saveWishBooks } from "../utility";

const BookDetails = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    const books = useLoaderData();
    const { book_Id } = useParams();
    const book = books.find(book => book.book_Id === book_Id);
    // console.log(book)

    const handleBookRead = (book) => {
        saveBooks(book);
    }

    const handleWishList = (book) => {
        saveWishBooks(book);
    }

    return (
        <div className="md:flex grid md:space-x-10 mt-8 md:mt-12 mb-10 md:mb-20 font-secondary">
            <div className="md:w-[45%] w-full rounded-2xl bg-[#1313130D] flex justify-center items-center ">
                <img src={book.book_image} alt="" />
            </div>
            <div className="flex-1 mt-5 md:mt-0 p-3 md:p-0 ">
                <h2 className="md:text-[40px] text-[30px] font-bold font-primary text-[#131313]">{book.book_name}</h2>
                <div className="text-[#131313CC] text-xl space-y-4 mt-4  font-medium ">
                    <p >By: {book.author}</p>
                    <hr />
                    <p className="">{book.book_category}</p>
                    <hr />
                </div>
                <p className=" mt-5 text-[#131313B2] "><span className="text-[#131313] font-bold">Review:</span>{book.book_review}</p>

                <p className=" my-6 font-medium  text-[#23BE0A] "><span className="text-[#131313] font-semibold  md:text-lg">Tag</span><span className="md:px-3 px-1 md:py-2 rounded-xl bg-[#23BE0A0D] ml-3">#{book.tags[0]}</span>    <span className="md:px-3 px-1 md:py-2 rounded-xl bg-[#23BE0A0D] ml:2 md:ml-3">#{book.tags[1]}</span></p>

                <hr />
                <div className="space-y-2 mt-5">
                    <p className="space-x-5"><span className="text-[#131313B2]">Number of Pages:</span> <span className="text-[#131313]  font-semibold">{book.total_pages}</span></p>
                    <p className="space-x-5"><span className="text-[#131313B2]">Publisher:</span> <span className="text-[#131313] font-semibold">{book.publisher_name}</span></p>
                    <p className="space-x-5"><span className="text-[#131313B2]">Year of Publishing:</span> <span className="text-[#131313] font-semibold">{book.publishing_year}</span></p>
                    <p className="space-x-5"><span className="text-[#131313B2]">Rating:</span> <span className="text-[#131313] font-semibold">{book.rating}</span></p>
                </div>

                <div className="md:space-x-6  flex justify-between md:justify-normal mt-7 font-semibold">
                    <button onClick={() => handleBookRead(book)} className="border bg-gray-200 hover:bg-[#23BE0A] hover:text-white py-2 px-5 rounded-lg">Read</button>
                    <button onClick={() => handleWishList(book)} className="text-white  py-2 px-5 rounded-lg hover:bg-cyan-600 bg-[#50B1C9]">Wishlist</button>
                    <button onClick={handleGoBack} className="border bg-gray-200 hover:bg-[#23BE0A] hover:text-white py-2 px-5 rounded-lg">Go back</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;