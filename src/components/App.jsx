import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

import Navigation from "./Navigation";
import HomePage from "./HomePage";
import Giving from "./Giving";
// @flow

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/giving" component={Giving} />
        </Switch>
      </Router>
    );
  }
}

export default App;
