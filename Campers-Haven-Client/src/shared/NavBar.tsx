import { useState } from "react";
import { NavLink } from "react-router-dom";
import ActiveRoutes from "../routes/ActiveRoutes";
// import logo from "./../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navMenu = (
    <>
      <li>
        <ActiveRoutes
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/"
          className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon-10 md:p-0 md:dark:hover:text-lemon-10 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Home
        </ActiveRoutes>
      </li>
      <li>
        <ActiveRoutes
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/"
          className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon-10 md:p-0 md:dark:hover:text-lemon-10 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Products
        </ActiveRoutes>
      </li>
      <li>
        <ActiveRoutes
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/"
          className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon-10 md:p-0 md:dark:hover:text-lemon-10 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          About Us
        </ActiveRoutes>
      </li>
    </>
  );

  return (
    <nav className=" fixed w-full  z-20 top-0 left-0  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:py-4 lg:px-16">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center sm:block text-2xl font-semibold whitespace-nowrap ">
            CampersHaven
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
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
          <button>
            <FaShoppingCart />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   uppercase">
            {navMenu}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
