import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" basename={"/Netflix-Clone-React"} component={Home}>
          <Home />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
