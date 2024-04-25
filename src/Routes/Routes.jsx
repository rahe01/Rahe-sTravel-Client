import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Error from "../Components/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        }
      ],
    },
  ]);


  export default router;

