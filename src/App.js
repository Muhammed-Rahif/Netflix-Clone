import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import All from "./Components/Upcoming/Upcoming";
// components
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upcoming" component={All} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
