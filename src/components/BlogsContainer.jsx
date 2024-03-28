
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
                    <Link to={`/blogs/${id}`} className="mx-auto  group hover:no-underline focus:no-underline ">
                            <img role="presentation" className="object-cover w-full rounded-md sm:h-56 h-44 " src={blog_img} />
                            <div className="md:py-6 pl-3 space-y-2">
                                <h3 className="sm:text-2xl text-xl font-semibold group-hover:underline group-focus:underline h-16">{blog_title}</h3>
                               <div className="flex justify-between font-medium sm:text-lg py-3"> 
                               <p className=" font-secondary flex items-center gap-2"><PiPenNibDuotone></PiPenNibDuotone> {writer}</p>

                               <p className=" font-secondary">{publish_date}</p>
                               </div>
                                <p>{blog_description.slice(0,130)} <span className="font-bold sm:text-xl text-lg">...Read More</span></p>
                       
                            </div>
                        </Link>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default BlogsContainer;