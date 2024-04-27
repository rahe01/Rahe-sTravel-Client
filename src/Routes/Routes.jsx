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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <SecondLayout></SecondLayout>,
        loader: () => fetch("http://localhost:5000/touristSports"),
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
        loader: ({params}) => fetch(`http://localhost:5000/tourist/${params.id}`),
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
      }
    ],
  },
]);

export default router;
