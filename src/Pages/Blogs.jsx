import { Link, useLoaderData } from "react-router-dom";
import BlogsContainer from "../components/BlogsContainer";
import { PiPenNibDuotone } from "react-icons/pi";

const Blogs = () => {
    const blogs = useLoaderData();


    return (
        <div className="my-6 sm:my-10 space-y-6 sm:space-y-12">
            <h2 className='md:text-3xl text-2xl   bg-[#1313130D] text-[#131313] py-3 md:py-8 rounded-2xl font-bold text-center'>Explore your knowledge</h2>
            <Link to={`/blogs/${blogs[0].id}`} className="hidden sm:flex max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  lg:grid lg:grid-cols-12 dark:bg-gray-50">
                <img src={blogs[0].blog_img} alt="" className="object-cover w-full h-56 rounded-md sm:h-96 lg:col-span-7 " />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].blog_title}</h3>
                    <div className="flex justify-between font-medium text-lg py-3">
                        <p className=" font-secondary flex items-center gap-2"><PiPenNibDuotone></PiPenNibDuotone> {blogs[0].writer}</p>

                        <p className=" font-secondary">{blogs[0].publish_date} </p>
                    </div>
                    <p>{blogs[0].blog_description.slice(0,250)}  <span className="font-bold text-xl">...Read More</span></p>
                
                </div>
            </Link>

            <div className="grid justify-center grid-cols-1 gap-10 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blog => <BlogsContainer key={blog.id} blog={blog} blogs={blogs}></BlogsContainer>)
                }
            </div>
        </div>
    );
};

export default Blogs;