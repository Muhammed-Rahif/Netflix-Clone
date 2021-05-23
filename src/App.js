import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <div className="row">
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
