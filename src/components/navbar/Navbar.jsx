import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#2861fd" : "#ffff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AllArtCraftItems"
          style={({ isActive }) => ({
            color: isActive ? "#2861fd" : "#ffff",
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
            color: isActive ? "#2861fd" : "#ffff",
            background: isActive ? "transparent" : "transparent",
          })}
        >
           Add Craft item
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myArtList"
          style={({ isActive }) => ({
            color: isActive ? "#2861fd" : "#ffff",
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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CraftoPia
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="md:flex gap-4 hidden">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
            <button
              onClick={handleHamburger}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {links}
            </ul>
          </div>
        </div>
        <div
          className={`md:hidden fixed p-6 z-[99] duration-500 w-[80%] h-screen top-0 text-white bg-gray-900 ${
            hamburger ? "right-0" : "right-[-400px]"
          }`}
        >
          <button onClick={handleHamburger} className="text-2xl">
            <IoMdClose />
          </button>
          <ul className="space-y-3 text-xl mt-6 ">
            {links}
          </ul>
          <div className="flex gap-4 mt-6">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
