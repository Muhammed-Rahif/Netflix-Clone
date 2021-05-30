import React, { useEffect, useState } from "react";
import VideoCards from "../VideoCards/VideoCards";
import axios from "../../configs/axios";

function SearchPage(props) {
  const [searchQuery, setsearchQuery] = useState();
  const [resultsArray, setResultsArray] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");
    setsearchQuery(query);
  });

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(
          `search/movie?query=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}&page=1`
        )
        .then((response) => {
          let data = response.data.results;
          setResultsArray(data);
          console.log(data);
        });
    }
  }, [searchQuery]);

  return (
    <React.Fragment>
      <VideoCards
        title={
          searchQuery ? `Searching for '${searchQuery}'` : "Search something..!"
        }
        cardsArray={resultsArray ? resultsArray : []}
        getNewCardsUrl={`search/movie?query=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}&page=`}
        type="movie"
      />
    </React.Fragment>
  );
}

export default SearchPage;
