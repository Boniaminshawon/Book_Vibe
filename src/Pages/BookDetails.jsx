import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { saveBooks } from "../utility";


const BookDetails = () => {
    const [readBooks, setReadBooks] = useState([]);


    const books = useLoaderData();
    const { book_Id } = useParams();
    const book = books.find(book => book.book_Id === book_Id);


    const handleBookRead = (book) => {
        saveBooks(book);
        const isExist = readBooks.find(b => b.book_Id === book.book_Id);
        if (!isExist) {
            const newReadBooks = [...readBooks, book];
            setReadBooks(newReadBooks);
            toast.success('Successfully added to the read list!')
        }


    }
    const handleWishList = (book) => {

        saveBooks(book)


        const isExist = readBooks.find(b => b.book_Id === book.book_Id);
        if (isExist) {
            toast.error('You already  added to the read list!')
        }
        else {
            toast.success('Successfully added to the Wish list!')
        }


    }

    return (
        <div className="flex space-x-10 mt-12 mb-20 font-secondary">
            <div className="w-[45%] rounded-2xl bg-[#1313130D] flex justify-center items-center ">
                <img src={book.book_image} alt="" />
            </div>
            <div className="flex-1 ">
                <h2 className="text-[40px] font-bold font-primary text-[#131313]">{book.book_name}</h2>
                <div className="text-[#131313CC] text-xl space-y-4 mt-4  font-medium ">
                    <p >By: {book.author}</p>
                    <hr />
                    <p className="">{book.book_category}</p>
                    <hr />
                </div>
                <p className=" mt-5 text-[#131313B2] "><span className="text-[#131313] font-bold">Review:</span>{book.book_review}</p>

                <p className=" my-6 font-medium  text-[#23BE0A] "><span className="text-[#131313] font-semibold text-lg">Tag</span><span className="px-3 py-2 rounded-xl bg-[#23BE0A0D] ml-3">#{book.tags[0]}</span>    <span className="px-3 py-2 rounded-xl bg-[#23BE0A0D] ml-3">#{book.tags[1]}</span></p>

                <hr />
                <div className="space-y-2 mt-5">
                    <p className="space-x-5"><span className="text-[#131313B2]">Number of Pages:</span> <span className="text-[#131313]  font-semibold">{book.total_pages}</span></p>
                    <p className="space-x-5"><span className="text-[#131313B2]">Publisher:</span> <span className="text-[#131313] font-semibold">{book.publisher_name}</span></p>
                    <p className="space-x-5"><span className="text-[#131313B2]">Year of Publishing:</span> <span className="text-[#131313] font-semibold">{book.publishing_year}</span></p>
                    <p className="space-x-5"><span className="text-[#131313B2]">Rating:</span> <span className="text-[#131313] font-semibold">{book.rating}</span></p>
                </div>

                <div className="space-x-6 mt-7 font-semibold">
                    <button onClick={() => handleBookRead(book)} className="border hover:bg-[#23BE0A] hover:text-white py-2 px-5 rounded-lg">Read</button>
                    <button onClick={() => handleWishList(book)} className="text-white py-2 px-5 rounded-lg hover:bg-cyan-600 bg-[#50B1C9]">Wishlist</button>
                    <Toaster />

                </div>



            </div>

        </div>
    );
};

export default BookDetails;