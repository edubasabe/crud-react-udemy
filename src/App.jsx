/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import { auth } from "./firebase";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("App -> user", user);
      if (user) setFirebaseUser(user);
      else setFirebaseUser(null);
    });
  }, []);
  return firebaseUser !== false ? (
    <Router>
      <Navbar firebaseUser={firebaseUser} />
      <div className="container mx-auto px-4">
        <Switch>
          <Route path="/" exact>
            Inicio
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
