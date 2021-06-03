import React, { useEffect, useState } from "react";
import VideoCards from "../../Components/VideoCards/VideoCards";
import axios from "../../configs/axios";

function TrendingShows(props) {
  const [trendingShows, setTrendingShows] = useState();

  useEffect(() => {
    axios
      .get(
        `trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&page=1`
      )
      .then((response) => {
        let data = response.data.results;
        setTrendingShows(data);
      });
  }, []);

  return (
    <React.Fragment>
      <VideoCards
        cardsArray={trendingShows ? trendingShows : []}
        getNewCardsUrl={`trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&page=`}
        title={trendingShows ? "Trending Shows on Netflix" : "Loading.."}
        type="tv"
      />
    </React.Fragment>
  );
}

export default TrendingShows;
