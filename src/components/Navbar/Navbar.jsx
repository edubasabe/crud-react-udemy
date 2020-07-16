import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header className="bg-gray-900 px-4 py-3 flex items-center">
      <div className="container mx-auto flex justify-between max-w-5xl">
        <div className="text-white font-bold">
          <Link className="text-2xl" to="/">
            Auth App
          </Link>
        </div>
        <nav className="flex">
          <ul className="flex items-center text-gray-300">
            <li className="mr-4">
              <NavLink to="/" exact className="font-semibold hover:text-white">
                Inicio
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/admin" className="font-semibold hover:text-white">
                Admin
              </NavLink>
            </li>

            <li className="">
              <NavLink
                to="/login"
                className="bg-blue-700 py-2 px-4 rounded font-semibold hover:text-white"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {};

export default Navbar;
