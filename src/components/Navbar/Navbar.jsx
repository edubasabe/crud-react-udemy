import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Button from "../UI/Button/Button";
import { auth } from "../../firebase";
import { FiLogOut, FiLogIn, FiList, FiUser, FiHome } from "react-icons/fi";
const Navbar = (props) => {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      props.history.push("/login");
    });
  };

  return (
    <header className="bg-gray-900 px-4 py-3 flex items-center">
      <div className="container mx-auto flex justify-between max-w-5xl">
        <div className="text-white font-bold">
          <Link className="text-2xl" to="/">
            AuthApp
          </Link>
        </div>
        <nav className="hidden md:flex top-navbar">
          <ul className="flex items-center text-gray-300">
            <li className="mr-3 lg:mr-8">
              <NavLink to="/" exact className="font-semibold hover:text-white">
                Inicio
              </NavLink>
            </li>

            {props.firebaseUser !== null ? (
              <>
                <li className="mr-3 lg:mr-8">
                  <NavLink
                    to="/admin"
                    className="font-semibold hover:text-white"
                  >
                    Admin
                  </NavLink>
                </li>

                <li className="mr-3 lg:mr-8">
                  <NavLink
                    to="/my-tasks"
                    className="font-semibold hover:text-white"
                  >
                    Mis Tareas
                  </NavLink>
                </li>
              </>
            ) : null}

            {props.firebaseUser !== null ? (
              <li>
                <Button
                  onClick={() => handleSignOut()}
                  className="bg-red-700 py-2 px-4 flex items-center"
                >
                  <span className="hidden md:block">Logout</span>
                  <FiLogOut className="ml-1" />
                </Button>
              </li>
            ) : (
              <li className="">
                <NavLink
                  to="/login"
                  className="bg-blue-700 py-2 px-4 rounded font-semibold hover:text-white"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <nav className="bottom-navbar flex fixed bottom-0 left-0 w-full bg-gray-100 border-t py-0 sm:hidden">
          <ul className="flex items-center text-gray-800 w-full justify-around">
            <li className="mr-3 lg:mr-8">
              <NavLink
                to="/"
                exact
                className="font-semibold hover:text-blue-600 flex flex-col items-center text-xs"
              >
                <FiHome size="1.8em" className="mb-1" />
                Inicio
              </NavLink>
            </li>

            {props.firebaseUser !== null ? (
              <>
                <li className="mr-3 lg:mr-8">
                  <NavLink
                    to="/admin"
                    className="font-semibold hover:text-blue-600 flex flex-col items-center text-xs"
                  >
                    <FiUser size="1.8em" className="mb-1" />
                    Admin
                  </NavLink>
                </li>

                <li className="mr-3 lg:mr-8">
                  <NavLink
                    to="/my-tasks"
                    className="font-semibold hover:text-blue-600 flex flex-col items-center text-xs"
                  >
                    <FiList size="1.8em" className="mb-1" />
                    Tareas
                  </NavLink>
                </li>
              </>
            ) : null}

            {props.firebaseUser !== null ? (
              <li>
                <Button
                  onClick={() => handleSignOut()}
                  className="font-semibold py-2 px-4 flex flex-col items-center text-xs"
                >
                  <FiLogOut size="1.8em" className="mb-1" />
                  Logout
                </Button>
              </li>
            ) : (
              <li className="">
                <NavLink
                  to="/login"
                  className="font-semibold py-2 px-4 flex flex-col items-center text-xs"
                >
                  <FiLogIn size="1.8em" className="mb-1" />
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
