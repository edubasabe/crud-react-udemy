import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  let classes = "";
  switch (props.type) {
    case "danger":
      classes = "bg-red-600 text-white";
      break;
    case "warning":
      classes = "bg-yellow-400 text-gray-900";
      break;
    default:
      classes = "py-2 px-2";
      break;
  }
  return (
    <button
      {...props}
      className={`py-1 px-2 rounded text-sm font-bold ${classes} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
