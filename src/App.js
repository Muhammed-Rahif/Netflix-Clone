import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies";
// components
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upcoming-movies" component={UpcomingMovies} />
        <Route path="" component={NotFound} />
      </Switch> 
    </Router>
  );
}

export default App;
