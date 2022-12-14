import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import AllService from "../../pages/Home/AllService/AllService";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Reviews from "../../pages/Reviews/Reviews";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },

            {
                path: '/allService',
                loader: () => {
                    return fetch('https://b6a11-service-review-server-side-rahat-ul-anwar.vercel.app/allServices');
                 },
                element: <AllService></AllService>
            },
            {

                path: '/services/:id',
                loader: ({params}) => {
                    return fetch(`https://b6a11-service-review-server-side-rahat-ul-anwar.vercel.app/services/${params.id}`)
                },
                element: <ServiceDetails></ServiceDetails>
            }
        ]
}



])