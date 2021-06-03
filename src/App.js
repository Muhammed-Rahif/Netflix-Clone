import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import UpcomingMovies from "./Pages/UpcomingMovies/UpcomingMovies";
import FamilyEntertainment from "./Pages/FamilyEntertainment/FamilyEntertainment";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import TrendingShows from "./Pages/TrendingShows/TrendingShows";
import TopRated from "./Pages/TopRated/TopRated";
import SearchPage from "./Pages/SearchPage/SearchPage";

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
