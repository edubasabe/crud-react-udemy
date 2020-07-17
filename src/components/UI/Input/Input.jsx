import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <>
      <input className="form-input w-full mb-2" {...props} />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default Input;
