import React, { Fragment, useState, useHook } from "react";
import "./App.css";

import Navbar from "./compenents/layout/Navbar";
import Users from "./compenents/users/Users";
import User from "./compenents/users/User";
import Search from "./compenents/users/Search";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import about from "./compenents/pages/about";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={about} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
