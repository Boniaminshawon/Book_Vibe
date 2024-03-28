import { createContext, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { getBooks } from "../utility";

export const sortContext = createContext([]);

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [readBooks, setReadBooks] = useState([]);
    const [displayReadBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getBooks();
        setReadBooks(storedBooks);
        setDisplayBooks(storedBooks);

    }, []);
    let handleSortingYear = (displayReadBooks) => {
        const year= [...displayReadBooks].sort(function (a, b) {
            const yearA = (a.publishing_year);
            const yearB = (b.publishing_year);
            const result = yearB - yearA;
            return result;
        });
        setDisplayBooks(year);
        console.log(year)
        //    window.location.reload();
    }
    let handleSortingRating = (displayReadBooks) => {
       const rating= [...displayReadBooks].sort(function (a, b) {
            const ratingA = (a.rating);
            const ratingB = (b.rating);
            const result = ratingB - ratingA;
            return result;
        });
        setDisplayBooks(rating);
    }
    let handleSortingPages = (displayReadBooks) => {
        const pages =[...displayReadBooks].sort(function (a, b) {
            const pagesA = (a.total_pages);
            const pagesB = (b.total_pages);
            const result = pagesB - pagesA;
            return result;
        });
        setDisplayBooks(pages);
    }


    return (
        <div className="font-secondary my-6 sm:my-10">
            <h2 className='md:text-3xl text-2xl bg-[#1313130D] text-[#131313] py-3 sm:py-8 rounded-2xl font-bold text-center font-primary'>Listed Books</h2>

            <sortContext.Provider value={displayReadBooks}>
                <div className="flex mt-4 md:mt-6 justify-center">
                    <details className="dropdown dropdown-right ">
                        <summary className="m-1 sm:text-[20px] btn bg-[#23BE0A] text-white">Sort By <span className="text-3xl">  <RiArrowDropDownLine /></span></summary>
                        <ul className="p-2  shadow menu dropdown-content z-[1] text-xl font-medium rounded-box bg-[#1313130D] w-32 md:w-52">
                            <Link onClick={() => handleSortingRating(displayReadBooks)}> <li><button>Rating</button></li></Link>
                            <Link onClick={() => handleSortingPages(displayReadBooks)}><li><a>Number of pages</a></li></Link>
                            <Link onClick={() => handleSortingYear(displayReadBooks)}><li ><a>Published Year</a></li></Link>
                        </ul>
                    </details>
                </div>


                <div className="flex text-[#131313CC] mt-5 text-lg font-semibold items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
                    <Link to={''} onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? ' border-2 border-b-0' : 'border-b'}  rounded-t-lg `}>

                        <span>Read Books</span>
                    </Link>

                    <Link to={`wishlist`} onClick={() => setTabIndex(1)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border-2 border-b-0' : 'border-b'}  rounded-t-lg `}>

                        <span>Wishlist Books</span>
                    </Link>
                </div>
                <Outlet></Outlet>
            </sortContext.Provider>
        </div>
    );
};

export default ListedBooks;