import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./custom.scss";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              {/* component here */}
              <h3>A special thank to Jesus and God</h3>
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
};

export default App;
