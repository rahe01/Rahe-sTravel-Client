import  { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";


import { AuthContext } from "../Provider/AuthProvider";



const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  const handleSingOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLink = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "btn btn-ghost bg-violet-500 rounded-3xl " : "btn glass rounded-3xl border-none")}
      >
        Home
      </NavLink>

      <NavLink to={"/about"} className={({ isActive }) => (isActive ? "btn btn-ghost bg-violet-500 rounded-3xl " : "btn glass rounded-3xl border-none")}>

      All Tourists Spot
      </NavLink>
     

     {user && <>
      <NavLink
        to={"/additem"}
        className={({ isActive }) => (isActive ? "btn btn-ghost bg-violet-500 rounded-3xl " : "btn glass rounded-3xl border-none")}
      >
        Add Tourists Spot
      </NavLink>
      <NavLink
        to={"/userprofile"}
        className={({ isActive }) => (isActive ? "btn btn-ghost bg-violet-500 rounded-3xl " : "btn glass rounded-3xl border-none")}
      >
        My List
      </NavLink>
     
     </>}
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link
            to={"/"}
            className=" btn btn-ghost text-xl flex flex-col font-bold"
          >
          <div className="flex">
         <h1>Rahe{"'"}s Travel</h1>
          </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user?.photoUrl}
                />
              </div>
              {showName && <span>{user.displayName}</span>}
            </div>
          )}
          {user ? (
            <button onClick={handleSingOut} className="btn rounded-3xl visible btn-ghost">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-ghost rounded-3xl">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;