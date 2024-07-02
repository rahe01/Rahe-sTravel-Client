import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

   
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      toast.error(
        "Password must have at least one lowercase letter, one uppercase letter, and be at least 6 characters long."
      );
      return;
    }

    createUser(formData.email, formData.password)
      .then((result) => {
        console.log(result.user);
        const userName = formData.name;
        console.log("User's name:", userName);
        updateProfile(result.user, {
          displayName: userName,
          photoURL: formData.photo,
        })
          .then(() => {
            
            navigate(location?.state ? location.state : "/");
            toast.success("Registration successful");
          })
          .catch((error) => {
           
            console.error("Error updating profile:", error);
            toast.error("An error occurred. Please try again later.");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero ">
        <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Register now!</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className=" p-3 border-b-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo URL"
                  name="photo"
                  className=" p-3 border-b-2"
                  value={formData.photo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className=" p-3 border-b-2"
                  value={formData.email}
                  onChange={handleChange}
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
                  placeholder="Password"
                  name="password"
                  className=" p-3 border-b-2 w-full"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span onClick={() => setShow(!show)} className="cursor-pointer absolute right-5">
                  {show ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
             </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="px-10">
              If you have an account?{" "}
              <Link to={"/login"} className="btn btn-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;