
import { Link, NavLink } from "react-router";
import logoImage from "../assets/logo.png";
import PrimaryBtn from "./PrimaryBtn";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user);

  const links = [
    { id: 1, path: "/", pathName: "Home" },
    { id: 1, path: "/allProducts", pathName: "All Products" },
    { id: 2, path: "/addProduct", pathName: "Add Product" },
    { id: 3, path: "/myCart", pathName: "My Cart" },
  ];

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("Log out successfull");
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-11/12 mx-auto py-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => isActive ? "font-semibold text-primary border-b rounded-b-none" : "text-gray-800"}
                    >{link.pathName}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <Link to="/">
            <img src={logoImage} className="md:w-[200px] w-[150px] h-[70px]" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => isActive ? "font-semibold text-primary border-b rounded-b-none" : "text-gray-800"}
                  >{link.pathName}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {
            user ?
              <>
                <p>{user.email}</p>
                <button onClick={() => handleLogout()}
                  className="btn bg-primary text-white"
                >
                  Logout
                </button>
              </>
              :
              <>
                <Link to="/register">
                  <PrimaryBtn>
                    Register
                  </PrimaryBtn>
                </Link>
                <Link to="/login">
                  <PrimaryBtn>
                    Login
                  </PrimaryBtn>
                </Link>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;