
import { PiPenNibDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
const BlogsContainer = ({ blog }) => {
    const { blog_title, blog_img,publish_date, writer,id,blog_description } = blog;
    console.log(id)
    return (
        <div>
            <section className="">
                <div >
                    <div >
                    <Link to={`/blogs/${id}`} className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded-md h-52 " src={blog_img} />
                            <div className="py-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline h-16">{blog_title}</h3>
                               <div className="flex justify-between font-medium text-lg py-3"> 
                               <p className=" font-secondary flex items-center gap-2"><PiPenNibDuotone></PiPenNibDuotone> {writer}</p>

                               <p className=" font-secondary">{publish_date}</p>
                               </div>
                                <p>{blog_description.slice(0,140)} <span className="font-bold text-xl">...Read More</span></p>
                       
                            </div>
                        </Link>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default BlogsContainer;