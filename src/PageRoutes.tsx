import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default PageRoutes;
