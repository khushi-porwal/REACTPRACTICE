import { createBrowserRouter } from "react-router-dom";

import HomeLayout from '../layouts/index'
import About from '../components/pages/About'
import Contact from "../components/pages/Contact";


const IndexRoutes = {
    path:'/',
    element:<HomeLayout/>,
    children: [
        {
            path:'/',
            element:<About/>
        },
        {
            path: '/contact',
            element:<Contact/>
        },
        {
            path:"*",
            element:<div className="h-screen flex justify-center item-center font-bold text-gray-700 text-7xl">404 NOT FOUND</div>
        },
        {
            path:'/401',
            element:<div className="h-screen flex justify-center item-center font-bold text-gray-700 text-7xl">401 UNAUTHORIED</div>
        }
    ]
}

export default IndexRoutes;