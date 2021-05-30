import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies";
import FamilyEntertainment from "./Components/FamilyEntertainment/FamilyEntertainment";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import TrendingShows from "./Components/TrendingShows/TrendingShows";
import TopRated from "./Components/TopRated/TopRated";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      return "Hey, are you sure you want to leave? Think of the new trailers !";
    };
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upcoming-movies" component={UpcomingMovies} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/trending-shows" component={TrendingShows} />
        <Route path="/family-entertainment" component={FamilyEntertainment} />
        <Route path="/search" component={SearchPage} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
