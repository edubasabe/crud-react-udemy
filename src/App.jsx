/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import { auth } from "./firebase";
import MyTasks from "./containers/MyTasks/MyTasks";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setFirebaseUser(user);
      else setFirebaseUser(null);
    });
  }, []);
  return firebaseUser !== false ? (
    <Router>
      <Navbar firebaseUser={firebaseUser} />
      <div className="mx-auto px-4 lg:px-0">
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
        <Switch>
          <Route path="/my-tasks">
            <MyTasks />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
