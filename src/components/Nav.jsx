import { NavLink } from "react-router-dom";


const Nav = () => {
    const links = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : 'text-[#131313CC] font-semibold'}>Home</NavLink>
        <NavLink to='/listBook' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : 'text-[#131313CC] font-semibold'}>Listed Books</NavLink>
        <NavLink to='/pagesRead' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : 'text-[#131313CC] font-semibold'}>Pages to Read</NavLink>

    </>
    return (
        <div className="navbar bg-base-100 font-secondary ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu space-x-7 text-xl menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end  gap-3 ">
                <a className="btn bg-[#23BE0A] text-xl text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-xl text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;