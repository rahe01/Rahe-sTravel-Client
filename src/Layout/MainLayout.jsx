import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <div>
            <ToastContainer /> 

            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;