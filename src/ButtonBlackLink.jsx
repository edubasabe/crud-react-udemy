import React from "react";
import { NavLink } from "react-router-dom";
const ButtonBlackLink = (props) => {
  return (
    <NavLink
      to={props.to}
      className="bg-gray-900 rounded-md text-white px-4 py-2 font-bold mr-2"
      activeClassName="bg-blue-600"
    >
      {props.children}
    </NavLink>
  );
};

export default ButtonBlackLink;
