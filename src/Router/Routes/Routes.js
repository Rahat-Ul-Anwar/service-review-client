import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import AllService from "../../pages/Home/AllService/AllService";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Reviews from "../../pages/Reviews/Reviews";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },

            {
                path: '/allService',
                loader: () => {
                    return fetch('http://localhost:5000/allServices');
                 },
                element: <AllService></AllService>
            },
            {

                path: '/services/:id',
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                },
                element: <ServiceDetails></ServiceDetails>
            }
        ]
}



])