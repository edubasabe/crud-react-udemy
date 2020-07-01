import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "tailwindcss/dist/tailwind.min.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AboutUs from "./AboutUs";
import ButtonBlackLink from "./ButtonBlackLink";

function App() {
  return (
    <Router>
      <div className="container p-5">
        <ButtonBlackLink to="/">Home</ButtonBlackLink>
        <ButtonBlackLink to="/nosotros">Nosotros</ButtonBlackLink>
        <ButtonBlackLink to="/contacto">Contacto</ButtonBlackLink>
        <hr className="my-6" />
        <Switch>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/nosotros">
            <AboutUs />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
