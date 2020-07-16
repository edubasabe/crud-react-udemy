import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <>
      <input
        className="bg-white focus:outline-none focus:border-blue-600 border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal mb-2"
        {...props}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default Input;
