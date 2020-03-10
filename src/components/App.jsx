import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

import Navigation from "./Navigation";
import HomePage from "./HomePage";
// @flow

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                {/* component here */}
                {/* <h3>A special thank to Jesus and God</h3> */}
                <Navigation />
                <HomePage />
              </div>
            )}
          />
          <Route
            path="/membership"
            render={() => (
              <div>
                {/* component here */}
                <h3>All to do with membership</h3>
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
