import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [theme, setTheme] = useState('light');

  const location = useLocation();
  


  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    const homeContainer = document.getElementById('home-container');
    if (homeContainer) {
      homeContainer.setAttribute('data-theme', newTheme);
    }
  };

  const { user, setLoading } = useContext(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful", {
          position: "top-right",
          duration: 2000,
          style: { width: "200px", height: "70px" },
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout Successful", {
          position: "top-right",
          duration: 2000,
          style: { width: "200px", height: "70px" },
        });
      });
  };

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const HamburgerLinks = (
    <>
      <li>
        <NavLink
          onClick={hamburger}
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FF6D60" : "#fff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={hamburger}
          to="/allCrafts"
          style={({ isActive }) => ({
            color: isActive ? "#FF6D60" : "#fff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={hamburger}
          to="/AddCraft"
          style={({ isActive }) => ({
            color: isActive ? "#FF6D60" : "#ffff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          Add Craft item
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={hamburger}
          to={`/myCrafts/${user?.email}`}
          style={({ isActive }) => ({
            color: isActive ? "#FF6D60" : "#ffff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FF6D60" : "#fff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allCrafts"
          style={({ isActive }) => ({
            color: isActive ? "#FF6D60" : "#fff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AddCraft"
          style={({ isActive }) => ({
            color: isActive ? "#FF6D60" : "#ffff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          Add Craft item
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/myCrafts/${user?.email}`}
          style={({ isActive }) => ({
            color: isActive ? "#FF6D60" : "#ffff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );

  return (
    <div>

      <nav className=" bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              CraftoPia
            </span>
          </Link>

          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">

            {
              !user && <div
                className={`md:block space-x-3 gap-4 hidden`}
              >
                <Link to="/login">
                  <button
                    type="button"
                    className="text-white bg-[#FF6D60] hover:bg-[#ff988f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Login
                  </button>
                </Link>
                <Link to={'/register'}>
                  <button
                    type="button"
                    className="text-white bg-[#FF6D60] hover:bg-[#ff988f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center "
                  >
                    Register
                  </button>
                </Link>
              </div>
            }

            {
              user && <div
                className={`flex items-center space-x-3 gap-4`}
              >
                {
                  user && <div className="tooltip tooltip-left avatar cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                }
                <Link
                  className="hidden md:flex"
                  onClick={handleLogout}
                  to="/login"
                >
                  <button
                    type="button"
                    className="text-white bg-[#FF6D60] hover:bg-[#ff988f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            }

            {
              location.pathname == '/' && 
              <div className={`flex items-center md:pl-4`}>
              <input
                type="checkbox"
                className="toggle"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
            </div>
            }

            <button
              onClick={handleHamburger}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              {links}
            </ul>
          </div>
        </div>
        <div
          className={`lg:hidden fixed p-6 z-[99] duration-500 md:w-[50%] w-[80%] h-screen top-0 text-white bg-gray-900 ${hamburger ? "right-0" : "right-[-350px] md:right-[-700px]"
            }`}
        >
          <button onClick={handleHamburger} className="text-2xl">
            <IoMdClose />
          </button>
          <ul className="font-semibold text-xl mt-6 ">{HamburgerLinks}</ul>

          <div className={`md:hidden flex gap-4 mt-6 ${user && "hidden"}`}>
            <Link onClick={handleHamburger} to="/login">
              <button
                type="button"
                className="text-white bg-[#FF6D60] hover:bg-[#ff988f] px-2 py-1 rounded-lg"
              >
                Login
              </button>
            </Link>
            <Link onClick={handleHamburger} to="/register">
              <button
                type="button"
                className="text-white bg-[#FF6D60] hover:bg-[#ff988f] px-2 py-1 rounded-lg"
              >
                Register
              </button>
            </Link>
          </div>
          <div className={`md:hidden flex gap-4 mt-6 ${!user && "hidden"}`}>
            <Link
              onClick={() => {
                handleLogout();
                handleHamburger();
              }}
              to="/login"
            >
              <button
                type="button"
                className="text-white bg-[#FF6D60] hover:bg-[#ff988f] px-2 py-1 rounded-lg"
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
