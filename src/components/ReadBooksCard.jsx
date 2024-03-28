import { MdOutlineContactPage } from "react-icons/md";
import { FcOvertime } from "react-icons/fc";
import { MdOutlineGroup } from "react-icons/md";
import { Link } from "react-router-dom";
const ReadBooksCard = ({ book }) => {
    const { book_Id, book_image, book_name, author, rating, publishing_year, publisher_name, book_category, total_pages, tags } = book;
    return (
        <div className="grid md:grid-cols-10 md:gap-8 gap-5  md:p-6 border rounded-2xl  shadow-lg mt-6">
            <div className="bg-[#1313130D] rounded-2xl md:col-span-2  flex items-center" >
                <img className=" " src={book_image} alt="" />
            </div>
            <div className="md:col-span-8 space-y-4">
                <h2 className="font-primary font-bold text-[#131313] text-[22px] md:text-[26px]">{book_name}</h2>
                <p className="font-medium text-[#131313CC] md:text-lg">By: {author}</p>

                <div className="  font-medium text-[#23BE0A] flex flex-col md:flex-row md:items-center ">
                    <p className="md:mt-2 mb-4 ">
                        <span className="text-[#131313] font-semibold text-lg">Tag</span>
                        <span className="px-3 py-2 rounded-xl bg-[#23BE0A0D] ml-3">#{book.tags[0]}</span>

                        <span className="px-3 py-2 rounded-xl bg-[#23BE0A0D] ml-3">#{book.tags[1]}</span>
                    </p>

                    <span className="text-[#131313CC] flex items-center text-lg md:ml-8 gap-2"><FcOvertime className="text-2xl" ></FcOvertime>Year of publishing:      {publishing_year}</span>
                </div>

                <p className="flex md:gap-10 gap-4 md:text-lg font-medium text-[#13131399]">
                    <span className="flex items-center gap-2"><MdOutlineGroup></MdOutlineGroup> Publisher: {publisher_name}</span>

                    <span className="flex items-center gap-2"><MdOutlineContactPage></MdOutlineContactPage>Pages: {total_pages}</span>
                </p>
                <hr />
                <div className="flex flex-col gap-5 lg:pt-2  md:flex-row md:gap-10">
                    <p className="text-[#328EFF] text-center bg-[#328eff26] py-1 md:px-4 px-2 rounded-3xl  ">Category: {book_category}</p>
                    <p className="text-[#FFAC33] text-center bg-[#ffac3326] py-1 md:px-4 px-2 rounded-3xl ">Rating: {rating}</p>
                    <Link to={`/${book_Id}`}><button className="text-white bg-[#23BE0A] rounded-3xl w-full md:px-4 px-2 py-1">View Details</button></Link>
                </div>


            </div>
        </div>
    );
};

export default ReadBooksCard;