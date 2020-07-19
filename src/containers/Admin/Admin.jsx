import React from "react";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PageHeading from "../../components/PageHeading/PageHeading";
import { FiUser } from "react-icons/fi";

const Admin = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (auth.currentUser) {
      console.log("user logged");
      setUser(auth.currentUser);
    } else {
      console.log("user doesn't exist");
      props.history.push("/login");
    }
  }, [props.history]);

  return (
    <div>
      <PageHeading>
        <FiUser size="1.5em" className="mr-2" />
        <h2 className="text-2xl font-semibold">Admin</h2>
      </PageHeading>
      <div className="container px-4">
        {user && (
          <div className="flex items-center py-3 px-3 rounded border shadow-md">
            <div className="bg-gray-600 rounded-full flex justify-center items-center w-10 h-10 text-white mr-4">
              {user.email.charAt(0).toUpperCase()}
            </div>
            <h3 className="text-lg">{user.email}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Admin);
