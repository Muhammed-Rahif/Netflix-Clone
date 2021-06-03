import React, { useEffect, useState } from "react";
import VideoCards from "../../Components/VideoCards/VideoCards";
import axios from "../../configs/axios";

function UpcomingMovies(props) {
  const [all, setAll] = useState();

  useEffect(() => {
    axios
      .get(
        `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        let data = response.data.results;
        setAll(data);
      });
  }, []);

  return (
    <React.Fragment>
      <VideoCards
        title={all ? "Upcoming Movies" : "Loading.."}
        cardsArray={all ? all : []}
        getNewCardsUrl={`movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`}
        type="movie"
      />
    </React.Fragment>
  );
}

export default UpcomingMovies;
