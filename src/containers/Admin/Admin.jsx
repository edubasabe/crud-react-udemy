import React from "react";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

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
      <h3 className="font-semibold text-2xl">Admin Protected Page</h3>
      <hr />
      {user && <h3 className="text-2xl font-semibold">{user.email}</h3>}
    </div>
  );
};

export default withRouter(Admin);
