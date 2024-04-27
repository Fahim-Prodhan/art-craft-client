import { createBrowserRouter } from "react-router-dom";

import ErrorElement from "../pages/errorElement/ErrorElement";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddCraft from "../pages/addCraft/AddCraft";
import PrivateRoute from "./PrivateRoute";
import baseUrl from "../services/helper";
import MyCrafts from "../pages/myCrafts/MyCrafts";
import AllCrafts from "../pages/allCrafts/AllCrafts";
import ViewDetails from "../pages/viewDetails/ViewDetails";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`${baseUrl}/crafts`),
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
            element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        },
        {
            path:'/myCrafts/:email',
            element:<PrivateRoute><MyCrafts></MyCrafts></PrivateRoute>,
            loader:({params})=>fetch(`${baseUrl}/crafts/${params.email}`)
        },
        {
            path:'/allCrafts',
            element:<AllCrafts></AllCrafts>,
            loader:()=>fetch(`${baseUrl}/crafts`)
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader:({params})=>fetch(`${baseUrl}/crafts/details/${params.id}`)
        },
      ]
    },
  ]);


export default router;