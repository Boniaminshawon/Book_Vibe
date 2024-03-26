import { MdOutlineContactPage } from "react-icons/md";
import { FcOvertime } from "react-icons/fc";
import { MdOutlineGroup } from "react-icons/md";
import { Link } from "react-router-dom";
const ReadBooksCard = ({ book }) => {
    const {book_Id, book_image, book_name, author, rating, publishing_year,publisher_name, book_category,total_pages, tags } = book;
    return (
        <div className="grid grid-cols-10 gap-8 p-6 border rounded-2xl  shadow-lg mt-6">
            <div className="bg-[#1313130D] rounded-2xl col-span-2  flex items-center" >
                <img className=" " src={book_image} alt="" />
            </div>
            <div className="col-span-8 space-y-4">
                <h2 className="font-primary font-bold text-[#131313] text-[26px]">{book_name}</h2>
                <p className="font-medium text-[#131313CC] text-lg">By: {author}</p>
                <p className=" my-6 font-medium  text-[#23BE0A] flex items-center "><span className="text-[#131313] font-semibold text-lg">Tag</span><span className="px-3 py-2 rounded-xl bg-[#23BE0A0D] ml-3">#{book.tags[0]}</span>    <span className="px-3 py-2 rounded-xl bg-[#23BE0A0D] ml-3">#{book.tags[1]}</span> <span className="text-[#131313CC] flex items-center text-lg ml-8 gap-2"><FcOvertime className="text-2xl" ></FcOvertime>Year of publishing:      {publishing_year}</span></p>

                <p className="flex gap-10 font-medium text-[#13131399]">
                    <span className="flex items-center gap-2"><MdOutlineGroup></MdOutlineGroup> Publisher: {publisher_name}</span>
                    <span className="flex items-center gap-2"><MdOutlineContactPage></MdOutlineContactPage>Pages: {total_pages}</span>
                </p>
                <hr />
                <div className="flex  gap-10">
                    <p className="text-[#328EFF] bg-[#328eff26] py-1 px-4 rounded-3xl  ">Category: {book_category}</p>
                    <p className="text-[#FFAC33] bg-[#ffac3326] py-1 px-4 rounded-3xl ">Rating: {rating}</p>
                    <Link to={`/${book_Id}`}><button className="text-white bg-[#23BE0A] rounded-3xl px-4 py-1">View Details</button></Link>
                </div>


            </div>
        </div>
    );
};

export default ReadBooksCard;