import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Error from "../Components/Error";
import SecondLayout from "../Layout/SecondLayout";
import AddTouristSport from "../Components/AddTouristSport";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            index: true,
            element : <SecondLayout></SecondLayout>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/additem',
            element : <AddTouristSport></AddTouristSport>
        }
      ],
    },
  ]);


  export default router;

