import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="container  px-10 mx-auto  font-primary">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;