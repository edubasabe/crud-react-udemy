import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  let classes = null;
  switch (props.type) {
    case "danger":
      classes = "py-1 px-2 text-sm bg-red-600 text-white";
      break;
    case "warning":
      classes = "py-1 px-2 text-sm bg-yellow-400 text-gray-900";
      break;
    default:
      classes = "py-2 px-2";
      break;
  }
  return (
    <button
      {...props}
      className={`rounded font-bold ${classes && classes} ${
        props.className ? props.className : ""
      }`}
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
