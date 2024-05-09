import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.svg";
import ThemeChange from "../ThemeChange/ThemeChange";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import "../Components/SignUp/SignUp.css"
import { CgProfile } from "react-icons/cg";
function Header() {
  const { users } = useContext(AuthContext);
  const auth = getAuth(app);
  const handleLogOut = () => {
    signOut(auth)
  }
    const navItems = (
      <>
        <li className="mr-3">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="mr-3">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="mr-3">
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li className="mr-3">
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
        <li className="mr-3">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        {users ? 
          <li className="mr-3">
            <button onClick={handleLogOut}>LogOut</button>
          </li> :
        <li className="mr-3">
          <NavLink to={"/loggedIn"}>Login</NavLink>
        </li>
        
        }
        
      </>
    );
  return (
    <div className="navbar bg-base-100 mb-4 shadow-lg">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" className="w-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="text-right text-4xl">
        {
          users ?
            <img src={users?.photoURL} alt="" className="rounded-full w-3/4 whirl"/>:
             <CgProfile /> 
            
        }   
      </div>
      <div className="navbar-end">
        <ThemeChange></ThemeChange>
        <a className="btn btn-outline btn-warning">Appointment</a>
      </div>
    </div>
  );
}
export default Header