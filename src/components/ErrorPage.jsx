import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error =useRouteError();
    console.log(error)



    return (
        <div className="flex space-y-8 flex-col justify-center min-h-screen items-center">
            <h2 className="font-extrabold text-5xl">Oops!!!</h2>
            <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            <i>{error.statusText}</i>
            <Link to={'/'}><button className="px-4 py-2 rounded-lg text-white bg-gray-600 text-2xl font-bold border ">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;