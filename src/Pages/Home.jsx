import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";


const Home = () => {
    const books = useLoaderData();

    return (
        <div className="">
           
            <Banner books={books}></Banner>
        </div>
    );
};

export default Home;