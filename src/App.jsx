/* eslint-disable no-restricted-globals */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.css";
import "tailwindcss/dist/tailwind.min.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
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
          <Route path="/admin">admin</Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
