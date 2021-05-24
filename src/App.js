import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home}>
          <Home />
        </Route>
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
