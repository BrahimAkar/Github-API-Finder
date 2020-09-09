import React, { Fragment, useState, useHook } from "react";
import "./App.css";

import Navbar from "./compenents/layout/Navbar";
import User from "./compenents/users/User";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import about from "./compenents/pages/about";
import GithubState from "./context/github/GithubState";
import Home from "./compenents/pages/Home";
import NotFound from "./compenents/pages/NotFound";
const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={about} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
              
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
