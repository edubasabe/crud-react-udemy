import React from "react";
import PropTypes from "prop-types";
import "./Loader.sass";
const Loader = (props) => {
  return (
    <div
      className={`h-screen w-screen bg-white fixed top-0 left-0 flex items-center justify-center ${
        props.loading ? "visible opacity-75" : "invisible opacity-0"
      }`}
    >
      <div className="dual-ring"></div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
