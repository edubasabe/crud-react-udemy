/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import Home from "./containers/Home/Home";
import { auth } from "./firebase";
import MyTasks from "./containers/MyTasks/MyTasks";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setFirebaseUser(user);
      else setFirebaseUser(null);
    });
  }, []);

  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/my-tasks">
            <MyTasks />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

  return firebaseUser !== false ? (
    <Router>
      <Navbar firebaseUser={firebaseUser} />
      <div className="mx-auto">
        <AnimatedSwitch />
      </div>
    </Router>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
