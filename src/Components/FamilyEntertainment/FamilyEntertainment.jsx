import React, { useEffect, useState } from "react";
import VideoCards from "../VideoCards/VideoCards";
import axios from "../../configs/axios";

function FamilyEntertainment(props) {
  const [familyEntertainment, setFamilyEntertainment] = useState();

  useEffect(() => {
    axios
      .get(
        `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751&page=1`
      )
      .then((response) => {
        let data = response.data.results;
        setFamilyEntertainment(data);
      });
  }, []);

  return (
    <React.Fragment>
      <VideoCards
        cardsArray={familyEntertainment ? familyEntertainment : []}
        getNewCardsUrl={`discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751&page=`}
        title={familyEntertainment ? "Family Films" : "Loading.."}
      />
    </React.Fragment>
  );
}

export default FamilyEntertainment;
