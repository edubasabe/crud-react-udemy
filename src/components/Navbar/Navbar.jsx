import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Button from "../UI/Button/Button";
import { auth } from "../../firebase";

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
        <nav className="flex">
          <ul className="flex items-center text-gray-300">
            <li className="mr-3 lg:mr-8">
              <NavLink to="/" exact className="font-semibold hover:text-white">
                Inicio
              </NavLink>
            </li>

            {props.firebaseUser !== null ? (
              <li className="mr-3 lg:mr-8">
                <NavLink to="/admin" className="font-semibold hover:text-white">
                  Admin
                </NavLink>
              </li>
            ) : null}

            {props.firebaseUser !== null ? (
              <li>
                <Button onClick={() => handleSignOut()} className="bg-red-700">
                  Logout
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
      </div>
    </header>
  );
};

export default withRouter(Navbar);
