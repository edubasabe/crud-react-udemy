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
        {user && <h3 className="text-2xl font-semibold">{user.email}</h3>}
      </div>
    </div>
  );
};

export default withRouter(Admin);
