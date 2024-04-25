import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { Helmet } from 'react-helmet';
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";



const Login = () => {
    const { signIn, createUserWithGoogle  , createUserWithGithub} = useContext(AuthContext);
    const navigate = useNavigate(); 
    const location = useLocation();

    const [show , setShow] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
                toast.success('Login successful');
            })                          
            .catch(error => {
                console.log(error);
                if (error.code === "auth/user-not-found") {
                    toast.error("User not found. Please check your email and password.");
                } else {
                    toast.error("An error occurred. Please try again later.");
                }
            });
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        createUserWithGoogle()
           .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
                toast.success('Login successful');
            })                          
           .catch(error => {
                console.log(error);
                toast.error("An error occurred. Please try again later.");
            });
    };

    const handleGithubLogin = (e) => {
        e.preventDefault();
        createUserWithGithub()
           .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
                toast.success('Login successful');
            })                          
           .catch(error => {
                console.log(error);
                toast.error("An error occurred. Please try again later.");
            });
    }

    return (
        <div>

            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero min-h-screen">
            
      
                <div className="hero-content flex flex-col ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="text-center ">
      
    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    
                        <form className="card-body" onSubmit={handleLogin}>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                               
                                <input
                                    type="email"
                                    placeholder={`Enter Your Email`}
                                    name="email"
                                    className=" p-3 border-b-2"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex flex-row items-center justify-center relative">
             <input
                  type={show ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  className="p-3 border-b-2 w-full"
                 
                  
                  required
                />
                <span onClick={() => setShow(!show)} className="cursor-pointer absolute right-5">
                  {show ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
             </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-glass bg-violet-500">Login</button>
                            </div>
                            <p className="text-center pt-3">Or <br /> Singup Using</p>
                        </form>
                     <div className="flex items-center justify-center gap-3">
                     <Link
                            onClick={handleGoogleLogin} 
                            className=" text-lg rounded-t-lg "
                        >
                            <FaGoogle className="text-2xl" />
                          
                        </Link>
                        <Link
                            onClick={handleGithubLogin} 
                            className=" text-lg rounded-t-lg"
                        >
                            <FaGithub className="text-2xl" />
                            
                        </Link>
                     </div>
                        <p className="pl-5">If you do{"'"}t have an account? <Link to={'/register'} className="btn btn-link">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;