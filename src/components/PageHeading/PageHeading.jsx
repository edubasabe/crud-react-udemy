import React from "react";
const PageHeading = (props) => {
  return (
    <div>
      <div className="headline flex bg-gray-100 w-full py-4 mb-4 px-4 lg:px-0 border-b border-gray-300">
        <div className="container max-w-5xl mx-auto flex items-center">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
