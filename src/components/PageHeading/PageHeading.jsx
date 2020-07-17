import React from "react";
import PropTypes from "prop-types";

const PageHeading = (props) => {
  return (
    <div>
      <div className="headline flex bg-gray-100 w-full py-4 mb-4 border-b border-gray-300">
        <div className="container max-w-5xl mx-auto flex">{props.children}</div>
      </div>
    </div>
  );
};

PageHeading.propTypes = {};

export default PageHeading;
