import { Link } from "react-router-dom";


const BooksContainer = ({ book }) => {
    const { book_Id,book_image, book_name, author, rating, book_category, tags } = book;
    
    return (
        <Link to={`/${book_Id}`} className="">
            <div className="border  border-[#13131326] p-6 rounded-2xl shadow-md ">
                <img src={book_image} alt="" className="object-cover bg-[#F3F3F3] object-center w-full rounded-md h-auto sm:h-[300px] dark:bg-gray-500" />
                <div className="">
                    <p className="text-start mt-5 mb-4 font-medium font-secondary text-[#23BE0A] "><span className="px-3 py-2 rounded-xl bg-[#23BE0A0D]">{tags[0]}</span>    <span className="px-3 py-2 rounded-xl bg-[#23BE0A0D] ml-3">{tags[1]}</span></p>

                    <h2 className="text-2xl h-16 text-start font-bold content-center text-[#131313]">{book_name}</h2>
                </div>
                <p className="text-[#131313CC] mt-3 text-lg mb-5 text-start font-medium font-secondary">By: {author}</p>
                <p className="border-b-2 border-dashed"></p>
                <div className="flex justify-between my-5 font-medium font-secondary">
                    <div><p>{book_category}</p></div>
                    <div className="flex  gap-2 font-medium ">
                        <p className="">{rating}</p>
                        <div className="rating rating-xl">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />

                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default BooksContainer;