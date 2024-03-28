
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { PiPenNibDuotone } from "react-icons/pi";

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id == id);
    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className=" sm:p-6 sm:pb-10  mt-5 ">

                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={blog.blog_img} alt="" className="block object-cover object-center w-full rounded-md sm:h-[410px]" />
                      
                    </div>
                    <div className="space-y-2 ">
                            <h3 className="font-bold text-2xl sm:text-3xl">{blog.blog_title}</h3>
                        
                        <div className="flex justify-between font-medium sm:text-lg py-3">
                            <p className=" font-secondary flex items-center gap-2"><PiPenNibDuotone></PiPenNibDuotone> {blog.writer}</p>

                            <p className=" font-secondary">Date: {blog.publish_date}</p>
                        </div>
                        <p className="font-secondary sm:text-lg py-3 sm:py-10">{blog.blog_description}</p>

                        <button className='text-white font-bold  py-3  bg-slate-700 rounded-lg w-full text-3xl' onClick={handleGoBack}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;