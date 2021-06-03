import React, { useEffect, useState } from "react";
import VideoCards from "../../Components/VideoCards/VideoCards";
import axios from "../../configs/axios";

function TopRated(props) {
  const [topRated, setTopRated] = useState();

  useEffect(() => {
    axios
      .get(
        `movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751&page=1`
      )
      .then((response) => {
        let data = response.data.results;
        setTopRated(data);
      });
  }, []);

  return (
    <React.Fragment>
      <VideoCards
        cardsArray={topRated ? topRated : []}
        getNewCardsUrl={`movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751&page=`}
        title={topRated ? "Top Rated on Netflix" : "Loading.."}
        type="movie"
      />
    </React.Fragment>
  );
}

export default TopRated;
