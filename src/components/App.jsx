import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import Giving from "./Giving";
import Members from "./Members";
import Families from "./Families";
import Givings from "./Givings";
// @flow

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/member" exact component={HomePage} />
          <Route path="/giving" component={Giving} />
          <Route path="/Members" component={Members} />
          <Route path="/Families" component={Families} />
          <Route path="/Givings" component={Givings} />
        </Switch>
      </Router>
    );
  }
}

export default App;
