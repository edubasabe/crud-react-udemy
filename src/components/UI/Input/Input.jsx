import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <>
      <input {...props} className={`form-input w-full ${props.className}`} />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default Input;
