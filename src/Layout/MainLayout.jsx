
import Nav from "../Components/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Footer from "../Components/Footer";



const MainLayout = () => {
    return (
        <div>
            <ToastContainer /> 

            <Nav></Nav>
            <div className="min-h-[calc(100vh-300px)]">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;