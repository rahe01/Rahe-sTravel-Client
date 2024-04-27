import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Error from "../Components/Error";
import SecondLayout from "../Layout/SecondLayout";
import AddTouristSport from "../Components/AddTouristSport";
import PrivateRoute from "./PrivateRoutes";
import MyList from "../Components/MyList";
import ViewDetails from "../Components/ViewDetails";
import AddCountry from "../Components/AddCountry";
import Edit from "../Components/Edit";
import AllTourist from "../Components/AllTourist";
import SpeaceficCountry from "../Components/SpeaceficCountry";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <SecondLayout></SecondLayout>,
        loader: () => fetch("https://a10-server-beta.vercel.app/touristSports"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/additem",
        element: (
          <PrivateRoute>
            <AddTouristSport></AddTouristSport>
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSports/:id",
        loader: ({params}) => fetch(`https://a10-server-beta.vercel.app/tourist/${params.id}`),
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
       
      },
      {
        path : '/addcountry',
        element : <PrivateRoute><AddCountry></AddCountry></PrivateRoute>
      },
      {
        path: '/edit/:id',
        element: <PrivateRoute><Edit></Edit></PrivateRoute>
      },
      {
        path: '/alltouristitem',
        element: <AllTourist></AllTourist>,
        loader: () => fetch("https://a10-server-beta.vercel.app/touristSports"),
      },
      {
        path: '/country/:country',
        loader: ({params}) => fetch(`https://a10-server-beta.vercel.app/countryyyy/${params.country}`),
        element: <SpeaceficCountry></SpeaceficCountry>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

export default router;
