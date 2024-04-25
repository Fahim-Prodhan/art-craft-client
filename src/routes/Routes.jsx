import { createBrowserRouter } from "react-router-dom";

import ErrorElement from "../pages/errorElement/ErrorElement";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddCraft from "../pages/addCraft/AddCraft";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addCraft',
            element:<AddCraft></AddCraft>
        },
      ]
    },
  ]);


export default router;