import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Root = () => {
    return (
        <div className="container  px-10 mx-auto  font-primary">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;