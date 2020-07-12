import React from "react";

const Error = (props) => {
  return <span className="text-red-500 text-sm mb-4">{props.children}</span>;
};

export default Error;
