import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);


    return (
        <div className="font-secondary  my-10">
            <h2 className='text-3xl bg-[#1313130D] text-[#131313] py-8 rounded-2xl font-bold text-center'>Books</h2>

            <div className="flex mt-6 justify-center">
                <details className="dropdown ">
                    <summary className="m-1 text-[20px] btn bg-[#23BE0A] text-white">Sort By <span className="text-3xl">  <RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>


            <div className="flex text-[#131313CC] text-lg font-medium items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
                <Link to={''} onClick={() => setTabIndex(0)}
                   className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?' border-2 border-b-0':'border-b'}  rounded-t-lg `}>
                  
                    <span>Read Books</span>
                </Link>
                <Link to={`wishlist`} onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?'border-2 border-b-0':'border-b'}  rounded-t-lg `}>
                  
                    <span>Wishlist Books</span>
                </Link>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;