import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/pages/Projects";
import Tools from "./components/pages/Tools";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/tools" component={Tools} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
